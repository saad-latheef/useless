import Link from "next/link"
import { Button } from "@/components/ui/button"
import Navigation from "@/components/shared/Navigation"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-green-50 to-yellow-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-green-600 to-yellow-600 opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
          <div className="text-center">
            <h1 className="text-5xl sm:text-7xl font-bold text-gray-900 mb-8 tracking-tight">
              <span className="bg-gradient-to-r from-blue-600 via-green-600 to-yellow-600 bg-clip-text text-transparent font-extrabold">
                The Ultimate Mallu Predictor
              </span>
              <span className="block text-3xl sm:text-4xl mt-4">🌴 🥥 👘</span>
            </h1>
            <p className="text-2xl sm:text-3xl text-gray-700 font-medium mb-6 tracking-wide">
              "Predicting life's most unpredictable moments... with style!"
            </p>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-12 font-light">
              Welcome to the most scientifically questionable yet culturally accurate prediction app 
              for all things Kerala! From coconut physics to mundu mechanics, we've got your 
              predictions covered with 100% confidence and 0% accuracy guarantee.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link href="/features">
                <Button size="lg" className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white px-8 py-4 text-lg font-medium tracking-wide">
                  🚀 Try Our Predictors
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Overview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
              🎯 What Can We Predict?
            </h2>
            <p className="text-xl text-gray-600 font-light">
              Discover our revolutionary prediction tools that combine ancient Kerala wisdom with modern guesswork
            </p>
          </div>

          <div className="text-center mb-8">
            <p className="text-lg text-gray-700 mb-6">
              Preview our prediction tools below, then head to the Features page to try them out!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Feature Preview Cards - Non-interactive */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-100 border-green-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 rounded-lg border p-6">
              <div className="text-center mb-4">
                <div className="text-6xl mb-4">🥥</div>
                <h3 className="text-2xl font-bold text-green-800 mb-2">
                  Coconut Tree Fall Predictor
                </h3>
                <p className="text-green-700 text-lg">
                  Predict when that stubborn coconut will finally decide to fall!
                </p>
              </div>
              <ul className="text-green-700 space-y-2">
                <li className="flex items-center"><span className="mr-2">✅</span> Wind speed analysis</li>
                <li className="flex items-center"><span className="mr-2">✅</span> Tree height calculations</li>
                <li className="flex items-center"><span className="mr-2">✅</span> Gravity cooperation index</li>
                <li className="flex items-center"><span className="mr-2">✅</span> Lucky number integration</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-amber-100 border-orange-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 rounded-lg border p-6">
              <div className="text-center mb-4">
                <div className="text-6xl mb-4">👘</div>
                <h3 className="text-2xl font-bold text-orange-800 mb-2">
                  Mundu Fall Predictor
                </h3>
                <p className="text-orange-700 text-lg">
                  Will your mundu stay up during that important meeting?
                </p>
              </div>
              <ul className="text-orange-700 space-y-2">
                <li className="flex items-center"><span className="mr-2">✅</span> Knot tightness measurement</li>
                <li className="flex items-center"><span className="mr-2">✅</span> Walking speed analysis</li>
                <li className="flex items-center"><span className="mr-2">✅</span> Confidence level assessment</li>
                <li className="flex items-center"><span className="mr-2">✅</span> Emergency protocols</li>
              </ul>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link href="/features">
              <Button size="lg" variant="outline" className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-4 text-lg font-semibold">
                🎮 Start Predicting Now
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gradient-to-r from-green-800 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-4xl font-bold mb-8">🏆 Why Mallu Predictor?</h3>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="space-y-4">
              <div className="text-5xl">🎯</div>
              <h4 className="text-xl font-semibold">100% Accuracy*</h4>
              <p className="opacity-90">*Accuracy not guaranteed, but confidence is!</p>
            </div>
            <div className="space-y-4">
              <div className="text-5xl">⚡</div>
              <h4 className="text-xl font-semibold">Lightning Fast</h4>
              <p className="opacity-90">Predictions faster than a falling coconut</p>
            </div>
            <div className="space-y-4">
              <div className="text-5xl">🌟</div>
              <h4 className="text-xl font-semibold">Kerala Authentic</h4>
              <p className="opacity-90">Blessed by the backwaters themselves</p>
            </div>
          </div>
        </div>
      </section>

      {/* Fun Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm opacity-75">
            Disclaimer: Predictions may vary. Coconuts and mundus are not actually harmed in the making of this app.
          </p>   
        </div>
      </footer>
    </div>
  )
}
