import Navigation from "@/components/shared/Navigation"
import AppFooter from "@/components/shared/AppFooter"
import {
  FeaturesPageHeader,
  CoconutPredictorSection,
  MunduPredictorSection,
  ProTipsSection,
  FeaturesCTASection
} from "@/components/sections"

export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-green-50 to-yellow-50">
      <Navigation />
      <FeaturesPageHeader />
      <CoconutPredictorSection />
      <MunduPredictorSection />
      <ProTipsSection />
      <FeaturesCTASection />
      <AppFooter />
    </div>
  )
}
