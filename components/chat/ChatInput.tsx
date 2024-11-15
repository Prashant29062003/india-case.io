'use client'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { CardFooter } from "@/components/ui/card"
import { Send } from 'lucide-react'
import { ChatInputProps } from './types'

const ChatInput: React.FC<ChatInputProps> = ({ input, handleInputChange, handleSubmit }) => {
  return (
    <CardFooter className="bg-gray-50 rounded-b-lg">
      <form onSubmit={handleSubmit} className="flex w-full gap-2">
        <Input
          value={input}
          onChange={handleInputChange}
          placeholder="Ask about Indian Constitution or legal cases..."
          className="flex-grow border-gray-300 focus:ring-indigo-500 focus:border-indigo-500"
        />
        <Button type="submit" className="bg-indigo-500 hover:bg-indigo-600 text-white">
          <Send className="mr-2 h-4 w-4" />
          Send
        </Button>
      </form>
    </CardFooter>
  )
}

export default ChatInput