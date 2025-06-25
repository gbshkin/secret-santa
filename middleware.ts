import { NextRequest, NextResponse } from 'next/server'
import MobileDetect from 'mobile-detect'

export function middleware(request: NextRequest) {
  const userAgent = request.headers.get('user-agent') || ''
  const md = new MobileDetect(userAgent)
  const isMobile = !!md.mobile()

  const response = NextResponse.next()
  response.headers.set('x-is-mobile', isMobile ? '1' : '0')
  
  return response
}