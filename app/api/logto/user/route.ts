import { logtoClient } from '@/lib/logto'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  try {
    // logtoClient가 초기화되지 않은 경우 처리
    if (!logtoClient) {
      console.error('Logto 클라이언트가 초기화되지 않았습니다.')
      return NextResponse.json({ user: null }, { status: 200 })
    }

    const context = await logtoClient.getLogtoContext(request, {
      fetchUserInfo: true,
    })
    
    if (!context.isAuthenticated || !context.claims) {
      return NextResponse.json({ user: null })
    }
    
    return NextResponse.json({ 
      user: {
        id: context.claims.sub,
        name: context.claims.name || context.claims.username || 'User',
        email: context.claims.email,
        avatar: context.claims.picture,
      }
    })
  } catch (error) {
    console.error('사용자 정보 조회 중 오류 발생:', error)
    // 오류가 발생해도 JSON 응답을 반환하여 클라이언트 오류 방지
    return NextResponse.json({ user: null }, { status: 200 })
  }
}