import { Message } from 'ai'
import { ChangeEvent, FormEvent } from 'react'

export interface ChatHeaderProps {
  isMenuOpen: boolean
  toggleMenu: () => void
}

export interface ChatMessagesProps {
  messages: Message[]
}

export interface ChatInputProps {
  input: string
  handleInputChange: (e: ChangeEvent<HTMLInputElement>) => void
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void
}
