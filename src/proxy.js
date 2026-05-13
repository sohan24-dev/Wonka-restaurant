
import { auth } from '@/app/lib/auth'
import { headers } from 'next/headers'
import { NextResponse } from 'next/server'
import { toast } from 'react-toastify'

export async function proxy(request) {
    const session = await auth.api.getSession({
        headers: await headers()
    })

    if (!session) {
        return NextResponse.redirect(new URL('/login?error=login_required', request.url))
    }

    return NextResponse.next()
}

export const config = {
    matcher: ["/allitems/:path", "/orderitems"],
}