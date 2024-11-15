'use client'

import { useState } from 'react'
import { useChat } from 'ai/react'
import { Card } from "@/components/ui/card"
import ChatHeader from './ChatHeader'
import ChatMessages from './ChatMessages'
import ChatInput from './ChatInput'

const ChatInterface: React.FC = () => {
  const { messages, input, handleInputChange, handleSubmit } = useChat()
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)

  const toggleMenu = (): void => setIsMenuOpen(!isMenuOpen)

  return (
    <Card className="w-full max-w-2xl mx-auto shadow-xl relative flex flex-col min-h-[calc(100vh-2rem)]">
      <ChatHeader isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
      <ChatMessages messages={messages} />
      <ChatInput 
        input={input}
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
      />
    </Card>
  )
}

export default ChatInterface