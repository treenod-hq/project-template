import LogtoClient from '@logto/next/edge'

// 환경 변수 검증
const requiredEnvVars = {
  LOGTO_ENDPOINT: process.env.LOGTO_ENDPOINT,
  LOGTO_APP_ID: process.env.LOGTO_APP_ID,
  LOGTO_APP_SECRET: process.env.LOGTO_APP_SECRET,
  LOGTO_COOKIE_SECRET: process.env.LOGTO_COOKIE_SECRET,
}

// 누락된 환경 변수 확인
const missingVars = Object.entries(requiredEnvVars)
  .filter(([, value]) => !value)
  .map(([key]) => key)

if (missingVars.length > 0) {
  console.error('필수 환경 변수가 설정되지 않았습니다:', missingVars.join(', '))
  console.error('`.env.local` 파일에 필요한 환경 변수를 설정해주세요.')
}

// baseUrl 확인 및 로깅
const baseUrl = process.env.LOGTO_BASE_URL || 'http://localhost:3000'
console.log('Logto 설정 정보:')
console.log('- Endpoint:', process.env.LOGTO_ENDPOINT)
console.log('- App ID:', process.env.LOGTO_APP_ID)
console.log('- Base URL:', baseUrl)
console.log('- Redirect URI:', `${baseUrl}/api/logto/sign-in-callback`)

export const logtoConfig = {
  endpoint: process.env.LOGTO_ENDPOINT || '',
  appId: process.env.LOGTO_APP_ID || '',
  appSecret: process.env.LOGTO_APP_SECRET || '',
  baseUrl: baseUrl,
  cookieSecret: process.env.LOGTO_COOKIE_SECRET || 'dummy-secret-for-development-only-32-chars',
  cookieSecure: process.env.NODE_ENV === 'production',
}

// logtoClient 초기화 시도
let logtoClient: LogtoClient | null = null

try {
  if (logtoConfig.endpoint && logtoConfig.appId && logtoConfig.appSecret) {
    logtoClient = new LogtoClient(logtoConfig)
  } else {
    console.warn('Logto 클라이언트 초기화 건너뜀: 환경 변수가 설정되지 않았습니다.')
  }
} catch (error) {
  console.error('Logto 클라이언트 초기화 오류:', error)
}

export { logtoClient }