import { CoconutTreePredictor } from "@/components/features"
import MunduFallPredictor from "@/components/features/MunduFallPredictor"
import Navigation from "@/components/shared/Navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-green-50 to-yellow-50">
      <Navigation />
      
      {/* Page Header */}
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

      {/* Coconut Tree Predictor Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              🥥 Coconut Drop Predictions
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Using advanced atmospheric analysis and gravity simulation to predict the exact moment 
              your coconut will decide to take the plunge.
            </p>
          </div>
          <CoconutTreePredictor />
        </div>
      </section>

      {/* Mundu Fall Predictor Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              👘 Mundu Stability Analysis
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Sophisticated textile mechanics combined with behavioral pattern recognition 
              to ensure your mundu stays where it belongs.
            </p>
          </div>
          <MunduFallPredictor />
        </div>
      </section>

      {/* Results & Tips Section */}
      <section className="py-16 bg-gradient-to-r from-indigo-100 to-purple-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              📊 Pro Tips for Better Predictions
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-lg p-6 shadow-lg text-center">
              <div className="text-3xl mb-3">🌪️</div>
              <h3 className="font-semibold text-gray-900 mb-2">Weather Matters</h3>
              <p className="text-sm text-gray-600">Include wind conditions for more accurate coconut predictions</p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-lg text-center">
              <div className="text-3xl mb-3">📏</div>
              <h3 className="font-semibold text-gray-900 mb-2">Measure Twice</h3>
              <p className="text-sm text-gray-600">Precise measurements lead to precise predictions</p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-lg text-center">
              <div className="text-3xl mb-3">🕐</div>
              <h3 className="font-semibold text-gray-900 mb-2">Timing is Key</h3>
              <p className="text-sm text-gray-600">Consider the time of day for optimal results</p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-lg text-center">
              <div className="text-3xl mb-3">🤞</div>
              <h3 className="font-semibold text-gray-900 mb-2">Cross Fingers</h3>
              <p className="text-sm text-gray-600">A little luck never hurt anyone's predictions</p>
            </div>
          </div>
        </div>
      </section>

      {/* Back to Home CTA */}
      <section className="py-16 bg-gradient-to-r from-green-800 to-blue-800 text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-bold mb-4">🏠 Ready to Go Back?</h3>
          <p className="text-xl opacity-90 mb-8">
            Or maybe you want to learn more about our incredible prediction technology?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/">
              <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-4 text-lg font-semibold">
                🏠 Back to Home
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 text-lg font-semibold">
              📞 Contact Us
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center space-x-8 text-3xl mb-4">
            <span>🥥</span>
            <span>🌴</span>
            <span>👘</span>
            <span>☕</span>
            <span>🛶</span>
          </div>
          <p className="text-sm opacity-75">
            Disclaimer: Predictions may vary. Results not guaranteed. Use at your own risk and amusement.
          </p>
          <p className="mt-2 text-sm opacity-60">
            Built with ❤️ and a healthy dose of Kerala spirit
          </p>
        </div>
      </footer>
    </div>
  )
}
