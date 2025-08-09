const tips = [
  {
    icon: "🌪️",
    title: "Weather Matters",
    description: "Include wind conditions for more accurate coconut predictions"
  },
  {
    icon: "📏",
    title: "Measure Twice",
    description: "Precise measurements lead to precise predictions"
  },
  {
    icon: "🕐",
    title: "Timing is Key",
    description: "Consider the time of day for optimal results"
  },
  {
    icon: "🤞",
    title: "Cross Fingers",
    description: "A little luck never hurt anyone's predictions"
  }
]

export default function ProTipsSection() {
  return (
    <section className="py-16 bg-gradient-to-r from-indigo-100 to-purple-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            📊 Pro Tips for Better Predictions
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {tips.map((tip, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-lg text-center">
              <div className="text-3xl mb-3">{tip.icon}</div>
              <h3 className="font-semibold text-gray-900 mb-2">{tip.title}</h3>
              <p className="text-sm text-gray-600">{tip.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
