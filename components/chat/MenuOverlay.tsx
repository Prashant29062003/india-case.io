import { forwardRef } from 'react'
import { Home, Info, ExternalLink, Mail, UserPlus, Zap } from 'lucide-react'

const MenuOverlay = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div 
      ref={ref}
      className="absolute right-0 mt-2 w-56 bg-white rounded-md shadow-lg z-10 overflow-hidden transition-all duration-200 ease-in-out"
    >
      <nav className="py-1">
        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-500 hover:text-white flex items-center">
          <Home className="mr-2 h-4 w-4" /> Home
        </a>
        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-500 hover:text-white flex items-center">
          <Info className="mr-2 h-4 w-4" /> About
        </a>
        <a 
          href="https://indiankanoon.org/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-500 hover:text-white flex items-center"
        >
          <ExternalLink className="mr-2 h-4 w-4" /> References
        </a>
        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-500 hover:text-white flex items-center">
          <Mail className="mr-2 h-4 w-4" /> Contact Us
        </a>
        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-500 hover:text-white flex items-center">
          <UserPlus className="mr-2 h-4 w-4" /> Sign In / Sign Up
        </a>
        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-500 hover:text-white flex items-center">
          <Zap className="mr-2 h-4 w-4" /> Upgrade to Pro
        </a>
      </nav>
    </div>
  )
})

MenuOverlay.displayName = 'MenuOverlay'
export default MenuOverlay