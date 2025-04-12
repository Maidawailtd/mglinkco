import { NextResponse } from 'next/server'
import jwt from 'jsonwebtoken'
import { db } from '@/lib/db'
import { users } from '@/lib/schema'
import { eq } from 'drizzle-orm'
import { z } from 'zod'

const updateSchema = z.object({
  name: z.string().min(2).optional(),
  email: z.string().email().optional(),
  avatar: z.string().optional(),
  isVerified: z.boolean().optional()
})

export async function PATCH(request: Request) {
  try {
    const authHeader = request.headers.get('Authorization')
    if (!authHeader?.startsWith('Bearer ')) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      )
    }

    const token = authHeader.split(' ')[1]
    const decoded = jwt.verify(token, process.env.JWT_SECRET!) as { userId: string }

    const body = await request.json()
    const validation = updateSchema.safeParse(body)
    
    if (!validation.success) {
      return NextResponse.json(
        { error: 'Invalid input', details: validation.error.errors },
        { status: 400 }
      )
    }

    const [updatedUser] = await db
      .update(users)
      .set(validation.data)
      .where(eq(users.id, decoded.userId))
      .returning()

    if (!updatedUser) {
      return NextResponse.json(
        { error: 'User not found' },
        { status: 404 }
      )
    }

    // Exclude password from response
    const { password: _, ...userData } = updatedUser
    return NextResponse.json(userData, { status: 200 })
  } catch (error) {
    console.error('Update error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
