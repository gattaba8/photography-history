export default function Loading() {
  return (
    <div className="min-h-screen bg-warm-950 flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="w-12 h-12 border-2 border-warm-800 border-t-amber-500 rounded-full animate-spin" />
        <p className="text-warm-500 text-sm tracking-wider uppercase">
          Chargement...
        </p>
      </div>
    </div>
  )
}
