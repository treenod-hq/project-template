import { logtoClient } from '@/lib/logto'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  if (!logtoClient) {
    console.error('Logto 클라이언트가 초기화되지 않았습니다.')
    return NextResponse.redirect(new URL('/', request.url))
  }
  
  return logtoClient.handleSignInCallback()(request)
}