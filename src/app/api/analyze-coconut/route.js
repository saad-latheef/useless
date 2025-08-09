import { NextResponse } from 'next/server';
import { analyzeImageWithAI, convertImageToBase64 } from '@/lib/ai-utils';
import { COCONUT_SYSTEM_INSTRUCTION, COCONUT_ANALYSIS_PROMPT } from '@/lib/ai-constants';

export async function POST(request) {
  try {
    // Parse the form data
    const formData = await request.formData();
    const imageFile = formData.get('image');
    const additionalInfo = formData.get('additionalInfo') || '';

    // Validate image file
    if (!imageFile) {
      return NextResponse.json(
        { error: 'No image file provided' },
        { status: 400 }
      );
    }

    // Validate file type
    if (!imageFile.type.startsWith('image/')) {
      return NextResponse.json(
        { error: 'Invalid file type. Please upload an image.' },
        { status: 400 }
      );
    }

    // Validate file size (10MB limit)
    const maxSize = 10 * 1024 * 1024; // 10MB
    if (imageFile.size > maxSize) {
      return NextResponse.json(
        { error: 'File too large. Please upload an image smaller than 10MB.' },
        { status: 400 }
      );
    }

    // Convert image to base64
    const imageData = await convertImageToBase64(imageFile);

    // Analyze image with AI
    const analysisResult = await analyzeImageWithAI(
      imageData,
      COCONUT_SYSTEM_INSTRUCTION,
      COCONUT_ANALYSIS_PROMPT,
      additionalInfo
    );

    if (!analysisResult.success) {
      return NextResponse.json(
        { error: analysisResult.error },
        { status: 500 }
      );
    }

    // Return the analysis result
    return NextResponse.json(analysisResult.data);

  } catch (error) {
    console.error('Coconut tree analysis route error:', error);
    return NextResponse.json(
      { error: 'Internal server error. Please try again later.' },
      { status: 500 }
    );
  }
}
