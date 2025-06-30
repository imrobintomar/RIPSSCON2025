import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { email } = await request.json();
    console.log('Received subscribe request for email:', email);

    // In a real application, you would integrate with an email marketing service
    // or save the email to a database here.
    // For now, we'll just log it and send a success response.

    return NextResponse.json({ message: 'Subscription successful!' }, { status: 200 });
  } catch (error) {
    console.error('Error processing subscribe request:', error);
    return NextResponse.json({ message: 'Failed to subscribe.' }, { status: 500 });
  }
}