import MunduFallPredictor from "@/components/features/MunduFallPredictor"

export default function MunduPredictorSection() {
  return (
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
  )
}
