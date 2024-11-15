// components/ui/Button.tsx
import { cn } from '@/lib/utils'
import { ButtonHTMLAttributes, forwardRef } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'ghost' | 'icon'
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', ...props }, ref) => {
    const baseStyles = 'px-4 py-2 rounded-md focus:ring-2 focus:ring-offset-2'
    const variants = {
      primary: 'bg-indigo-500 text-white hover:bg-indigo-600',
      ghost: 'text-gray-700 hover:bg-gray-100',
      icon: 'p-2 text-gray-700 hover:bg-gray-100 rounded-full'
    }
    return (
      <button
        ref={ref}
        className={cn(baseStyles, variants[variant], className)}
        {...props}
      />
    )
  }
)

Button.displayName = 'Button'
export default Button
