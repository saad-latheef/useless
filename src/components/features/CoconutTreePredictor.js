"use client"

import { useState, useRef } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function CoconutTreePredictor() {
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
      // TODO: Replace with actual Gemini AI API call
      console.log("Analyzing coconut tree image:", selectedImage.name)
      console.log("Additional info:", additionalInfo)
      
      
      // Mock result for now
      const mockResult = {
        riskLevel: Math.random() > 0.5 ? "HIGH" : "MEDIUM",
        confidence: Math.floor(Math.random() * 30) + 70,
        factors: [
          "Tree lean angle detected",
          "Coconut cluster weight analysis",
          "Wind resistance assessment",
          "Root stability evaluation"
        ],
        prediction: `Based on AI analysis, coconuts have a ${Math.floor(Math.random() * 40) + 30}% chance of falling within the next 24 hours.`,
        recommendations: [
          "Monitor wind conditions",
          "Consider harvesting ripe coconuts",
          "Check tree stability"
        ]
      }
      
      setAnalysisResult(mockResult)
    } catch (error) {
      console.error("Analysis failed:", error)
      setAnalysisResult({
        error: "Analysis failed. Please try again with a clearer image."
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
    <Card className="w-full max-w-4xl mx-auto bg-gradient-to-br from-green-50 to-emerald-100 border-green-200 shadow-lg hover:shadow-xl transition-shadow duration-300">
      <CardHeader className="text-center">
        <CardTitle className="text-3xl font-bold text-green-800 mb-2">
          🥥 AI-Powered Coconut Fall Predictor
        </CardTitle>
        <CardDescription className="text-green-700 text-lg">
          Upload a photo of your coconut tree and let our AI analyze the falling probability! 
          Our advanced Gemini-powered system will assess tree stability, coconut ripeness, and environmental factors.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        
        {/* Image Upload Section */}
        <div className="space-y-4">
          <label className="text-sm font-medium text-green-800">
            📸 Upload Coconut Tree Image:
          </label>
          
          <div 
            className="border-2 border-dashed border-green-300 rounded-lg p-8 text-center hover:border-green-400 transition-colors cursor-pointer"
            onDragOver={handleDragOver}
            onDrop={handleDrop}
            onClick={() => fileInputRef.current?.click()}
          >
            {imagePreview ? (
              <div className="space-y-4">
                <img 
                  src={imagePreview} 
                  alt="Coconut tree preview" 
                  className="max-h-64 mx-auto rounded-lg shadow-md"
                />
                <p className="text-green-700 font-medium">
                  📷 {selectedImage?.name}
                </p>
                <Button 
                  variant="outline" 
                  onClick={(e) => {
                    e.stopPropagation()
                    handleReset()
                  }}
                  className="border-green-300 text-green-700 hover:bg-green-50"
                >
                  🔄 Choose Different Image
                </Button>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="text-6xl">🌴</div>
                <div>
                  <p className="text-green-700 font-medium mb-2">
                    Click to upload or drag & drop your coconut tree image
                  </p>
                  <p className="text-sm text-green-600">
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
          <label className="text-sm font-medium text-green-800" htmlFor="additional-info">
            📝 Additional Information (Optional):
          </label>
          <Input
            id="additional-info"
            type="text"
            placeholder="e.g., Recent wind conditions, tree age, location details..."
            value={additionalInfo}
            onChange={(e) => setAdditionalInfo(e.target.value)}
            className="border-green-300 focus:border-green-500 focus:ring-green-500"
          />
        </div>

        {/* Analyze Button */}
        <Button 
          onClick={handleAnalyze}
          className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 text-lg"
          disabled={!selectedImage || isAnalyzing}
        >
          {isAnalyzing ? (
            <div className="flex items-center justify-center space-x-2">
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
              <span>🤖 AI is analyzing your tree...</span>
            </div>
          ) : (
            "🔮 Analyze with AI"
          )}
        </Button>

        {/* Analysis Results */}
        {analysisResult && (
          <div className="mt-6 p-6 bg-white rounded-lg shadow-inner border border-green-200">
            {analysisResult.error ? (
              <div className="text-center text-red-600">
                <div className="text-4xl mb-2">❌</div>
                <p className="font-medium">{analysisResult.error}</p>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="text-center">
                  <h3 className="text-xl font-bold text-green-800 mb-2">
                    🎯 AI Analysis Results
                  </h3>
                  <div className={`inline-flex items-center px-4 py-2 rounded-full font-semibold ${
                    analysisResult.riskLevel === "HIGH" ? "bg-red-100 text-red-800" :
                    analysisResult.riskLevel === "MEDIUM" ? "bg-yellow-100 text-yellow-800" :
                    "bg-green-100 text-green-800"
                  }`}>
                    Risk Level: {analysisResult.riskLevel} ({analysisResult.confidence}% confidence)
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-green-800 mb-2">📊 Analysis Factors:</h4>
                    <ul className="space-y-1">
                      {analysisResult.factors.map((factor, index) => (
                        <li key={index} className="flex items-center text-sm text-green-700">
                          <span className="mr-2">✅</span>
                          {factor}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-green-800 mb-2">💡 Recommendations:</h4>
                    <ul className="space-y-1">
                      {analysisResult.recommendations.map((rec, index) => (
                        <li key={index} className="flex items-center text-sm text-green-700">
                          <span className="mr-2">💡</span>
                          {rec}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-800 mb-2">🔮 Prediction:</h4>
                  <p className="text-green-700">{analysisResult.prediction}</p>
                </div>
              </div>
            )}
          </div>
        )}

        <div className="text-center text-sm text-green-600 italic">
          "Powered by advanced AI - where technology meets coconut wisdom!"
        </div>
      </CardContent>
    </Card>
  )
}
