import { LucideChevronUpCircle } from 'lucide-react'
import { useEffect, useState } from 'react'

const BackToTopButton = () => {
  const [showButton, setShowButton] = useState(false)

  const handleScroll = () => {
    if (window.scrollY > 550) {
      setShowButton(true)
    } else {
      setShowButton(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <button
      className={`fixed bottom-10 right-10 rounded-full bg-brand-secondary-500 p-2 text-white shadow-md transition-opacity lg:right-24 ${
        showButton ? 'opacity-100' : 'opacity-0'
      }`}
      onClick={scrollToTop}
      aria-label="Scroll to top"
    >
      <LucideChevronUpCircle className="h-6 w-6" />
    </button>
  )
}

export default BackToTopButton
