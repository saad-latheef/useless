export default function FeaturesPageHeader() {
  return (
    <section className="relative overflow-hidden py-16">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-green-600 to-yellow-600 opacity-10"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl sm:text-6xl font-extrabold text-gray-900 mb-6">
            <span className="bg-gradient-to-r from-blue-600 via-green-600 to-yellow-600 bg-clip-text text-transparent">
              Prediction Central
            </span>
            <span className="block text-2xl sm:text-3xl mt-2">⚡ 🔮 ⚡</span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-700 font-medium mb-4">
            "Time to put our algorithms to the test!"
          </p>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Welcome to the prediction playground! Here you can test our revolutionary Kerala-inspired 
            prediction algorithms. Enter your data, cross your fingers, and let the magic happen.
          </p>
          
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <div className="inline-flex items-center space-x-2 bg-green-100 rounded-full px-4 py-2">
              <span className="text-green-600">🥥</span>
              <span className="text-green-800 font-medium text-sm">Coconut Physics</span>
            </div>
            <div className="inline-flex items-center space-x-2 bg-orange-100 rounded-full px-4 py-2">
              <span className="text-orange-600">👘</span>
              <span className="text-orange-800 font-medium text-sm">Mundu Mechanics</span>
            </div>
            <div className="inline-flex items-center space-x-2 bg-blue-100 rounded-full px-4 py-2">
              <span className="text-blue-600">🤖</span>
              <span className="text-blue-800 font-medium text-sm">AI-Powered Guessing</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
