import { GoogleGenerativeAI } from '@google/generative-ai';
import { 
  MODEL_NAME, 
  GENERATION_CONFIG,
  SAFETY_SETTINGS 
} from './ai-constants';

// Initialize AI client with API key from environment
const genAI = new GoogleGenerativeAI(process.env.AIzaSyByLbSouj5k8oDqvV4jlRYU1daXv8gdnO8);

/**
 * Processes an image with Gemini AI and returns the analysis
 * @param {Object} imageData - The image data to analyze
 * @param {Object} systemInstruction - The system instruction for the AI
 * @param {Object} prompt - The analysis prompt
 * @param {string} additionalInfo - Additional context information
 * @returns {Promise<Object>} - The AI analysis result
 */
export async function analyzeImageWithAI(imageData, systemInstruction, prompt, additionalInfo = '') {
  try {
    // Initialize the model
    const model = genAI.getGenerativeModel({ 
      model: MODEL_NAME,
      generationConfig: GENERATION_CONFIG,
      safetySettings: SAFETY_SETTINGS,
      systemInstruction: systemInstruction.text
    });

    // Prepare the prompt with additional context
    const fullPrompt = additionalInfo 
      ? `${prompt.text}\n\nAdditional context: ${additionalInfo}` 
      : prompt.text;

    // Prepare the image data for the API
    const imagePart = {
      inlineData: {
        data: imageData.base64,
        mimeType: imageData.mimeType
      }
    };

    // Generate content with image and prompt
    const result = await model.generateContent([fullPrompt, imagePart]);
    
    // Get the response text
    const response = await result.response;
    const fullResponse = response.text();

    // Try to parse JSON response
    try {
      // Clean up the response text (remove any markdown formatting)
      const cleanedResponse = fullResponse.replace(/```json\n?/g, '').replace(/```\n?/g, '').trim();
      const parsedResponse = JSON.parse(cleanedResponse);
      
      // Validate that the response has the expected structure
      if (typeof parsedResponse === 'object' && parsedResponse !== null) {
        return {
          success: true,
          data: parsedResponse
        };
      } else {
        throw new Error('Invalid response structure');
      }
    } catch (parseError) {
      // If JSON parsing fails, create a fallback response
      console.warn('Failed to parse AI response as JSON:', parseError);
      console.warn('Raw response:', fullResponse);
      
      // Try to extract meaningful information from the raw text
      const fallbackResponse = {
        rawResponse: fullResponse,
        prediction: fullResponse.length > 0 ? fullResponse : 'Analysis completed but response format was unexpected',
        error: 'Response was not in expected JSON format'
      };
      
      return {
        success: true,
        data: fallbackResponse
      };
    }

  } catch (error) {
    console.error('AI analysis error:', error);
    return {
      success: false,
      error: error.message || 'AI analysis failed'
    };
  }
}

/**
 * Converts a file to base64 format for AI processing (Server-side)
 * @param {File} file - The image file to convert
 * @returns {Promise<Object>} - Object with base64 data and mime type
 */
export async function convertImageToBase64(file) {
  try {
    // Convert File to ArrayBuffer then to Buffer (Node.js)
    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    const base64String = buffer.toString('base64');
    
    return {
      base64: base64String,
      mimeType: file.type
    };
  } catch (error) {
    throw new Error('Failed to convert image to base64: ' + error.message);
  }
}
