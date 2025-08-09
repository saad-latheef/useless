import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function FeaturesCTASection() {
  return (
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
  )
}
