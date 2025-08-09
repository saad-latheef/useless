// Mundu analysis system instruction
export const MUNDU_SYSTEM_INSTRUCTION = {
  text: "You are an expert in analyzing traditional Indian clothing, specifically the mundu. Your task is to analyze an image of a person wearing a mundu and determine if it is likely to fall or if it is worn too low."
};

// Mundu analysis prompt
export const MUNDU_ANALYSIS_PROMPT = {
  text: `You will be provided with an image of a person wearing a mundu:

{image_of_person_wearing_mundu}

Follow these steps to analyze the image:

1. Analyze the image to determine how securely the mundu is tied or fastened.
2. Assess the tightness and stability of the mundu's knot or fastening.
3. Evaluate the fabric's drape and how well it conforms to the wearer's body.
4. Check if the mundu is worn too low, which may increase the risk of it falling.
5. Consider the wearer's posture and movements in the image.
6. Based on your analysis, determine the likelihood of the mundu falling.
7. Determine if the mundu is worn too low based on traditional standards.

Output your analysis in JSON format with the following structure:
{
  "stabilityLevel": "SECURE|MODERATE|RISKY",
  "confidence": number (0-100),
  "factors": ["factor1", "factor2", "factor3", "factor4"],
  "prediction": "detailed prediction text",
  "recommendations": ["recommendation1", "recommendation2", "recommendation3"],
  "wornTooLow": true|false
}

Example:
{
  "stabilityLevel": "MODERATE",
  "confidence": 75,
  "factors": ["Knot appears moderately tight", "Fabric drape is adequate", "Posture looks stable", "Standard positioning observed"],
  "prediction": "The mundu appears to have moderate stability with a 75% confidence level for maintaining position during normal activities.",
  "recommendations": ["Tighten the knot slightly", "Adjust fabric positioning", "Maintain confident posture"],
  "wornTooLow": false
}`
};

// Coconut tree analysis system instruction
export const COCONUT_SYSTEM_INSTRUCTION = {
  text: "You are an expert in analyzing coconut trees and predicting the likelihood of coconuts falling. Your task is to analyze an image of a coconut tree and assess various risk factors."
};

// Coconut tree analysis prompt
export const COCONUT_ANALYSIS_PROMPT = {
  text: `You will be provided with an image of a coconut tree:

{image_of_coconut_tree}

Follow these steps to analyze the image:

1. Assess the tree's overall lean and structural stability.
2. Evaluate the size, weight, and ripeness of coconut clusters.
3. Examine the health and strength of branches supporting coconuts.
4. Consider environmental factors visible in the image (wind damage, etc.).
5. Analyze the tree's root system stability if visible.
6. Determine the overall risk level for coconut fall.

Output your analysis in JSON format with the following structure:
{
  "riskLevel": "HIGH|MEDIUM|LOW",
  "confidence": number (0-100),
  "factors": ["factor1", "factor2", "factor3", "factor4"],
  "prediction": "detailed prediction text",
  "recommendations": ["recommendation1", "recommendation2", "recommendation3"]
}

Example:
{
  "riskLevel": "MEDIUM",
  "confidence": 85,
  "factors": ["Tree shows slight lean", "Coconut clusters appear heavy", "Branches look healthy", "No visible storm damage"],
  "prediction": "Based on analysis, coconuts have a 60% chance of falling within the next 24-48 hours due to cluster weight and slight tree lean.",
  "recommendations": ["Monitor wind conditions", "Consider harvesting ripe coconuts", "Check tree stability regularly"]
}`
};

// Gemini generation configuration
export const GENERATION_CONFIG = {
  maxOutputTokens: 65535,
  temperature: 0.7,
  topP: 0.95,
  seed: 0
};

// Safety settings (separate from generation config)
export const SAFETY_SETTINGS = [
  {
    category: 'HARM_CATEGORY_HATE_SPEECH',
    threshold: 'BLOCK_NONE',
  },
  {
    category: 'HARM_CATEGORY_DANGEROUS_CONTENT',
    threshold: 'BLOCK_NONE',
  },
  {
    category: 'HARM_CATEGORY_SEXUALLY_EXPLICIT',
    threshold: 'BLOCK_NONE',
  },
  {
    category: 'HARM_CATEGORY_HARASSMENT',
    threshold: 'BLOCK_NONE',
  }
];

// Vertex AI configuration
export const VERTEX_CONFIG = {
  vertexai: true,
  project: 'snappy-lattice-468503-q3',
  location: 'global'
};

export const MODEL_NAME = 'gemini-2.5-pro';
