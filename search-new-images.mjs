import { chromium } from 'playwright';
import { writeFileSync, existsSync } from 'fs';

const browser = await chromium.launch();
const page = await browser.newPage();

// For each event, search for a DIFFERENT image than the main one
const searches = [
  { id: 'niepce-premiere-photo', q: 'Niépce camera obscura heliography', skip: 'view_from_window' },
  { id: 'calotype-talbot', q: 'Fox Talbot Pencil of Nature photograph', skip: 'lacock' },
  { id: 'daguerreotype-1839', q: 'daguerreotype camera Giroux apparatus', skip: 'boulevard' },
  { id: 'premier-portrait', q: 'daguerreotype portrait 1840s photograph', skip: 'cornelius' },
  { id: 'premiere-photo-reportage', q: 'Hamburg fire 1842 ruins photograph', skip: 'jungfernstieg' },
  { id: 'mission-heliographique', q: 'Gustave Le Gray seascape photograph', skip: 'moissac' },
  { id: 'collodion-humide', q: 'wet plate collodion photographer portable darkroom', skip: 'collodion_humide' },
  { id: 'carte-de-visite-disderi', q: 'carte de visite album Victorian photograph', skip: 'disderi' },
  { id: 'premiere-photo-couleur', q: 'James Clerk Maxwell color separation photograph', skip: 'tartan' },
  { id: 'gelatino-bromure', q: 'dry plate gelatin silver photographic emulsion', skip: 'gelatino' },
  { id: 'muybridge-mouvement', q: 'Muybridge zoopraxiscope animal locomotion', skip: 'horse_in_motion' },
  { id: 'kodak-n1-eastman', q: 'George Eastman Kodak factory Rochester', skip: 'kodak_no1' },
  { id: 'film-souple-celluloid', q: 'Eastman film roll patent 1889 photography', skip: 'film_35mm' },
  { id: 'brownie-kodak', q: 'Kodak Brownie advertisement 1900 poster', skip: 'brownie' },
  { id: 'autochrome-lumiere', q: 'autochrome portrait Lumière color early', skip: 'autochrome' },
  { id: 'ur-leica-prototype', q: 'Oskar Barnack Leitz Wetzlar camera prototype', skip: 'leica_i' },
  { id: 'photo-grande-guerre', q: 'World War I photography soldiers camera trench', skip: 'ww1_trench' },
  { id: 'leica-i-commercial', q: 'Leica I advertisement 1920s photography', skip: 'leica_i' },
  { id: 'exakta-premier-slr-35mm', q: 'Kine Exakta 1936 first SLR camera', skip: 'exakta' },
  { id: 'polaroid-edwin-land', q: 'Edwin Land Polaroid demonstration instant', skip: 'polaroid' },
  { id: 'hasselblad-1600f', q: 'Hasselblad NASA space camera Apollo', skip: 'hasselblad' },
  { id: 'cartier-bresson-images-sauvette', q: 'Henri Cartier-Bresson Leica photographer', skip: 'cartier_bresson' },
  { id: 'nikon-f', q: 'Nikon F Vietnam war photographer press', skip: 'nikon_f' },
  { id: 'exposition-automatique', q: 'camera light meter selenium exposure CdS', skip: 'canonet' },
  { id: 'instamatic-kodak', q: 'Kodak Instamatic 126 film cartridge advertisement', skip: 'instamatic' },
  { id: 'photo-lunaire-apollo', q: 'Apollo Hasselblad camera moon surface NASA', skip: 'aldrin' },
  { id: 'premier-appareil-numerique', q: 'Steven Sasson Kodak digital camera inventor', skip: 'sasson' },
  { id: 'konica-c35-af-autofocus', q: 'Honeywell Visitronic autofocus module camera', skip: 'konica' },
  { id: 'minolta-7000-af-reflex', q: 'Minolta 7000 AF autofocus SLR lens', skip: 'minolta' },
  { id: 'adobe-photoshop', q: 'Thomas Knoll John Knoll Photoshop 1990 screenshot', skip: 'photoshop' },
  { id: 'kodak-dcs-premier-reflex-numerique', q: 'Kodak DCS 100 digital camera Nikon F3', skip: 'kodak_dcs' },
  { id: 'nikon-d1', q: 'Nikon D1 sports photography digital SLR 1999', skip: 'nikon_d1' },
  { id: 'premier-telephone-photo', q: 'camera phone first 2000 Sharp J-Phone mobile', skip: 'sharp' },
  { id: 'canon-eos-300d', q: 'Canon Digital Rebel 300D DSLR 2003', skip: 'canon_300d' },
  { id: 'flickr-partage-photos', q: 'Flickr website 2004 photo sharing community', skip: 'flickr' },
  { id: 'iphone-photo-mobile', q: 'Steve Jobs iPhone 2007 Apple presentation', skip: 'iphone_original' },
  { id: 'instagram-revolution', q: 'Instagram app smartphone screen photo sharing', skip: 'instagram' },
  { id: 'sony-a7-hybride-plein-format', q: 'Sony Alpha 7 mirrorless full frame lens', skip: 'sony_a7' },
  { id: 'double-capteur-iphone7plus', q: 'iPhone 7 Plus portrait mode bokeh camera', skip: 'iphone7plus' },
  { id: 'photo-computationnelle-night-sight', q: 'Google Pixel smartphone night mode photography', skip: 'aurora' },
  { id: 'capteurs-108-megapixels', q: 'Samsung ISOCELL camera sensor 108MP chip', skip: 'samsung' },
  { id: 'ia-photographie-generative', q: 'AI generated art Midjourney DALL-E image', skip: 'theatre_opera' },
];

const results = {};
let downloaded = 0;

for (const { id, q, skip } of searches) {
  try {
    const url = `https://commons.wikimedia.org/w/index.php?search=${encodeURIComponent(q)}&title=Special:MediaSearch&type=image`;
    await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 15000 });
    await page.waitForTimeout(2000);

    // Get first few results, skip ones matching the main image
    const hrefs = await page.evaluate((skipStr) => {
      const links = [...document.querySelectorAll('.sdms-search-results a.sdms-image-result')];
      return links
        .map(a => a.href)
        .filter(h => !h.toLowerCase().includes(skipStr.toLowerCase()))
        .slice(0, 3);
    }, skip);

    if (hrefs.length > 0) {
      // Visit first result to get the full image URL
      await page.goto(hrefs[0], { waitUntil: 'domcontentloaded', timeout: 10000 });
      const imgUrl = await page.evaluate(() => {
        const link = document.querySelector('.fullMedia a, .fullImageLink a');
        return link?.href || null;
      });

      if (imgUrl) {
        results[id] = imgUrl;
        downloaded++;
        console.log(`[${downloaded}] ${id}: ${imgUrl.split('/').pop()?.substring(0, 50)}`);
      } else {
        console.log(`[!] ${id}: no image URL found`);
        results[id] = null;
      }
    } else {
      console.log(`[!] ${id}: no search results`);
      results[id] = null;
    }
  } catch (e) {
    console.log(`[!] ${id}: error`);
    results[id] = null;
  }
}

await browser.close();
writeFileSync('/tmp/new_illus_urls.json', JSON.stringify(results, null, 2));
console.log(`\nFound ${downloaded}/${searches.length} new images`);
