// components/ui/Card.tsx
import { cn } from '@/lib/utils'
import { HTMLAttributes, forwardRef } from 'react'

interface CardProps extends HTMLAttributes<HTMLDivElement> {}

const Card = forwardRef<HTMLDivElement, CardProps>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn('bg-white shadow-md rounded-lg overflow-hidden', className)} {...props} />
))

Card.displayName = 'Card'
export default Card

// Define CardHeader, CardContent, and CardFooter as separate components for modularity

export const CardHeader = ({ children, className }: HTMLAttributes<HTMLDivElement>) => (
  <div className={cn('p-4 border-b bg-gray-100', className)}>{children}</div>
)

export const CardContent = ({ children, className }: HTMLAttributes<HTMLDivElement>) => (
  <div className={cn('p-4', className)}>{children}</div>
)

export const CardFooter = ({ children, className }: HTMLAttributes<HTMLDivElement>) => (
  <div className={cn('p-4 border-t bg-gray-50', className)}>{children}</div>
)
