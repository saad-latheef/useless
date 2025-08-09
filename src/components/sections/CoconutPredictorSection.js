import { CoconutTreePredictor } from "@/components/features"

export default function CoconutPredictorSection() {
  return (
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
  )
}
