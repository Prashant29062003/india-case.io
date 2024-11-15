'use client'

import { useRef, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { CardHeader, CardTitle } from "@/components/ui/card"
import { Scale, Menu, X } from 'lucide-react'
import MenuOverlay from './MenuOverlay'
import { ChatHeaderProps } from './types'

const ChatHeader: React.FC<ChatHeaderProps> = ({ isMenuOpen, toggleMenu }) => {
  const menuRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent): void => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node) &&
          buttonRef.current && !buttonRef.current.contains(event.target as Node)) {
        toggleMenu()
      }
    }

    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isMenuOpen, toggleMenu])

  return (
    <CardHeader className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-t-lg p-4">
      <div className="flex justify-between items-center w-full">
        <CardTitle className="text-2xl font-bold flex items-center gap-2">
          <Scale className="h-6 w-6" />
          Indian Legal AI Assistant
        </CardTitle>
        <Button
          variant="ghost"
          size="icon"
          onClick={toggleMenu}
          ref={buttonRef}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="text-white hover:bg-indigo-600 focus:ring-2 focus:ring-white"
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </div>
      {isMenuOpen && <MenuOverlay ref={menuRef} />}
    </CardHeader>
  )
}

export default ChatHeader