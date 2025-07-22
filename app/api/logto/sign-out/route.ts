import { logtoClient } from '@/lib/logto'
import { NextRequest } from 'next/server'

export async function GET(request: NextRequest) {
  if (!logtoClient) {
    return new Response('Logto client is not properly configured', { status: 500 })
  }
  
  return logtoClient.handleSignOut()(request)
}