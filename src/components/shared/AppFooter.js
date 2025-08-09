const keralaEmojis = ["🥥", "🌴", "👘", "☕", "🛶"]

export default function AppFooter() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex justify-center space-x-8 text-3xl mb-4">
          {keralaEmojis.map((emoji, index) => (
            <span key={index}>{emoji}</span>
          ))}
        </div>
        <p className="text-sm opacity-75">
          Disclaimer: Predictions may vary. Results not guaranteed. Use at your own risk and amusement.
        </p>
        <p className="mt-2 text-sm opacity-60">
          Built with ❤️ and a healthy dose of Kerala spirit
        </p>
      </div>
    </footer>
  )
}
