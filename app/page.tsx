import ChatInterface from '@/components/chat/ChatInterface';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100 flex items-center justify-center p-4">
      <ChatInterface />
    </main>
  )
}