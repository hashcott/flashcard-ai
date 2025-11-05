import { NextResponse } from 'next/server';
import { flashcards } from '@/lib/flashcards';

export async function GET() {
    return NextResponse.json(flashcards);
}