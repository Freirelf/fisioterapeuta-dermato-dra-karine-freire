import { useState } from 'react'

import { About } from './components/about'
import BackToTopButton from './components/BackToTopButton.tsx'
import { Form } from './components/contact'
import { Footer } from './components/footer'
import { Header } from './components/header'
import { Home } from './components/home'
import { Main } from './components/main'
import { Services } from './components/services'

export function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleToggleMenu = (isOpen: boolean) => {
    setIsMenuOpen(isOpen)
  }
  return (
    <div>
      <Header onToggleMenu={handleToggleMenu} />
      <main
        className={`transition-all duration-0 ease-in-out ${isMenuOpen ? 'pt-60' : 'pt-0'}`}
      >
        <Home />
      </main>
      <Main />
      <Services />
      <About />
      <Form />
      <Footer />
      <BackToTopButton />
    </div>
  )
}
