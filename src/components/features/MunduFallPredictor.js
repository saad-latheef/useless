"use client"

import { useState, useRef } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function MunduFallPredictor() {
  const [selectedImage, setSelectedImage] = useState(null)
  const [imagePreview, setImagePreview] = useState(null)
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [analysisResult, setAnalysisResult] = useState(null)
  const [additionalInfo, setAdditionalInfo] = useState("")
  const fileInputRef = useRef(null)

  const handleImageUpload = (event) => {
    const file = event.target.files[0]
    if (file) {
      setSelectedImage(file)
      
      // Create preview URL
      const reader = new FileReader()
      reader.onload = (e) => {
        setImagePreview(e.target.result)
      }
      reader.readAsDataURL(file)
      
      // Clear previous results
      setAnalysisResult(null)
    }
  }

  const handleDragOver = (event) => {
    event.preventDefault()
  }

  const handleDrop = (event) => {
    event.preventDefault()
    const file = event.dataTransfer.files[0]
    if (file && file.type.startsWith('image/')) {
      setSelectedImage(file)
      
      const reader = new FileReader()
      reader.onload = (e) => {
        setImagePreview(e.target.result)
      }
      reader.readAsDataURL(file)
      
      setAnalysisResult(null)
    }
  }

  const handleAnalyze = async () => {
    if (!selectedImage) return
    
    setIsAnalyzing(true)
    
    try {
      console.log("Analyzing mundu image:", selectedImage.name)
      console.log("Additional info:", additionalInfo)
      
      // Create FormData for image upload
      const formData = new FormData()
      formData.append('image', selectedImage)
      formData.append('additionalInfo', additionalInfo)
      
      // Call the API
      const response = await fetch('/api/analyze-mundu', {
        method: 'POST',
        body: formData
      })
      
      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.error || 'Analysis failed')
      }
      
      const result = await response.json()
      
      if (result.error) {
        throw new Error(result.error)
      }
      
      // Ensure the result has the expected structure for mundu analysis
      const processedResult = {
        stabilityLevel: result.stabilityLevel || "MODERATE",
        confidence: result.confidence || 75,
        factors: Array.isArray(result.factors) ? result.factors : ["Analysis completed"],
        prediction: result.prediction || "Analysis completed successfully",
        recommendations: Array.isArray(result.recommendations) ? result.recommendations : ["Adjust positioning if needed"],
        wornTooLow: result.wornTooLow || false
      }
      
      setAnalysisResult(processedResult)
    } catch (error) {
      console.error("Mundu analysis failed:", error)
      setAnalysisResult({
        error: "Analysis failed. Please try again with a clearer image showing the mundu properly."
      })
    } finally {
      setIsAnalyzing(false)
    }
  }

  const handleReset = () => {
    setSelectedImage(null)
    setImagePreview(null)
    setAnalysisResult(null)
    setAdditionalInfo("")
    if (fileInputRef.current) {
      fileInputRef.current.value = ""
    }
  }

  return (
    <Card className="w-full max-w-4xl mx-auto bg-gradient-to-br from-orange-50 to-amber-100 border-orange-200 shadow-lg hover:shadow-xl transition-shadow duration-300">
      <CardHeader className="text-center">
        <CardTitle className="text-3xl font-bold text-orange-800 mb-2">
          👘 AI-Powered Mundu Stability Predictor
        </CardTitle>
        <CardDescription className="text-orange-700 text-lg">
          Upload a photo of your mundu and let our AI analyze its stability! 
          Our advanced Gemini-powered system will assess knot tightness, fabric tension, and fall probability.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        
        {/* Image Upload Section */}
        <div className="space-y-4">
          <label className="text-sm font-medium text-orange-800">
            📸 Upload Mundu Image:
          </label>
          
          <div 
            className="border-2 border-dashed border-orange-300 rounded-lg p-8 text-center hover:border-orange-400 transition-colors cursor-pointer"
            onDragOver={handleDragOver}
            onDrop={handleDrop}
            onClick={() => fileInputRef.current?.click()}
          >
            {imagePreview ? (
              <div className="space-y-4">
                <img 
                  src={imagePreview} 
                  alt="Mundu preview" 
                  className="max-h-64 mx-auto rounded-lg shadow-md"
                />
                <p className="text-orange-700 font-medium">
                  📷 {selectedImage?.name}
                </p>
                <Button 
                  variant="outline" 
                  onClick={(e) => {
                    e.stopPropagation()
                    handleReset()
                  }}
                  className="border-orange-300 text-orange-700 hover:bg-orange-50"
                >
                  🔄 Choose Different Image
                </Button>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="text-6xl">👘</div>
                <div>
                  <p className="text-orange-700 font-medium mb-2">
                    Click to upload or drag & drop your mundu image
                  </p>
                  <p className="text-sm text-orange-600">
                    Supports JPG, PNG, WEBP (Max 10MB)
                  </p>
                </div>
              </div>
            )}
          </div>
          
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="hidden"
          />
        </div>

        {/* Additional Information */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-orange-800" htmlFor="additional-info">
            📝 Additional Information (Optional):
          </label>
          <Input
            id="additional-info"
            type="text"
            placeholder="e.g., Activity planned, walking duration, occasion type..."
            value={additionalInfo}
            onChange={(e) => setAdditionalInfo(e.target.value)}
            className="border-orange-300 focus:border-orange-500 focus:ring-orange-500"
          />
        </div>

        {/* Analyze Button */}
        <Button 
          onClick={handleAnalyze}
          className="w-full bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 text-lg"
          disabled={!selectedImage || isAnalyzing}
        >
          {isAnalyzing ? (
            <div className="flex items-center justify-center space-x-2">
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
              <span>🤖 AI is analyzing your mundu...</span>
            </div>
          ) : (
            "🎯 Analyze Stability with AI"
          )}
        </Button>

        {/* Analysis Results */}
        {analysisResult && (
          <div className="mt-6 p-6 bg-white rounded-lg shadow-inner border border-orange-200">
            {analysisResult.error ? (
              <div className="text-center text-red-600">
                <div className="text-4xl mb-2">❌</div>
                <p className="font-medium">{analysisResult.error}</p>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="text-center">
                  <h3 className="text-xl font-bold text-orange-800 mb-2">
                    🎯 AI Stability Analysis
                  </h3>
                  <div className={`inline-flex items-center px-4 py-2 rounded-full font-semibold ${
                    analysisResult.stabilityLevel === "SECURE" ? "bg-green-100 text-green-800" :
                    analysisResult.stabilityLevel === "MODERATE" ? "bg-yellow-100 text-yellow-800" :
                    "bg-red-100 text-red-800"
                  }`}>
                    Stability: {analysisResult.stabilityLevel} ({analysisResult.confidence}% confidence)
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-orange-800 mb-2">📊 Analysis Factors:</h4>
                    <ul className="space-y-1">
                      {analysisResult.factors.map((factor, index) => (
                        <li key={index} className="flex items-center text-sm text-orange-700">
                          <span className="mr-2">✅</span>
                          {factor}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-orange-800 mb-2">💡 Recommendations:</h4>
                    <ul className="space-y-1">
                      {analysisResult.recommendations.map((rec, index) => (
                        <li key={index} className="flex items-center text-sm text-orange-700">
                          <span className="mr-2">💡</span>
                          {rec}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="bg-orange-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-orange-800 mb-2">🎯 Stability Assessment:</h4>
                  <p className="text-orange-700">{analysisResult.prediction}</p>
                </div>
              </div>
            )}
          </div>
        )}

        <div className="text-center text-sm text-orange-600 italic">
          "Powered by advanced AI - where technology meets traditional attire wisdom!"
        </div>
      </CardContent>
    </Card>
  )
}
