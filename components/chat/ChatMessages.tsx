'use client'

import { CardContent } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import { ChatMessagesProps } from './types'

const ChatMessages: React.FC<ChatMessagesProps> = ({ messages }) => {
  return (
    <CardContent className="p-0 flex-grow overflow-hidden">
      <ScrollArea className="h-full w-full p-4">
        {messages.map((message, index) => (
          <div key={index} className={`mb-4 flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div 
              className={`max-w-[80%] p-3 rounded-lg ${
                message.role === 'user' 
                  ? 'bg-indigo-500 text-white' 
                  : 'bg-white border border-gray-200 shadow-sm'
              }`}
            >
              <p className={`text-sm ${message.role === 'user' ? 'text-white' : 'text-gray-800'}`}>
                {message.content}
              </p>
            </div>
          </div>
        ))}
      </ScrollArea>
    </CardContent>
  )
}

export default ChatMessages