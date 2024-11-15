// components/ui/Input.tsx
import { cn } from '@/lib/utils'
import { InputHTMLAttributes, forwardRef } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

const Input = forwardRef<HTMLInputElement, InputProps>(({ className, ...props }, ref) => {
  return (
    <input
      ref={ref}
      className={cn(
        'border border-gray-300 rounded-md px-3 py-2 focus:ring-indigo-500 focus:border-indigo-500',
        className
      )}
      {...props}
    />
  )
})

Input.displayName = 'Input'
export default Input
