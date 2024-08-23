import { Menu, X } from 'lucide-react'
import { useState } from 'react'

import { Button } from '../ui/button'

interface HeaderProps {
  onToggleMenu: (isOpen: boolean) => void
}

export function Header({ onToggleMenu }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false)

  const handleToggleMenu = () => {
    const newIsOpen = !isOpen
    setIsOpen(newIsOpen)
    onToggleMenu(newIsOpen)
  }

  return (
    <div className="relative border-b border-brand-primary-800 bg-gradient-to-r from-brand-primary-400 to-brand-secondary-400">
      <div className="flex items-center justify-between px-6">
        <div className="border-r border-brand-primary-800 pr-4">
          <img
            src="images/logotipo.png"
            alt="Logotipo"
            className="w-1/2 py-1 lg:w-full"
          />
        </div>
        <div className="lg:hidden">
          <button
            onClick={handleToggleMenu}
            className="text-brand-primary-800 focus:outline-none"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
        <nav
          className={`${
            isOpen ? 'block' : 'hidden'
          } absolute left-0 right-0 top-16 z-50 rounded border-y border-brand-primary-800 p-4 text-center text-sm  uppercase tracking-wide text-brand-secondary-400 lg:static lg:flex lg:items-center lg:gap-40 lg:space-x-4 lg:border-none lg:text-base`}
        >
          <a
            className="block py-2 hover:text-brand-primary-800 lg:py-0"
            href="#home"
          >
            Início
          </a>
          <a
            className="block py-2 hover:text-brand-primary-900 lg:py-0"
            href="#treatment"
          >
            Atendimento
          </a>
          <a
            className="block py-2 hover:text-brand-primary-900 lg:py-0"
            href="#services"
          >
            Serviços
          </a>
          <a
            className="block py-2 hover:text-brand-primary-900 lg:py-0"
            href="#about"
          >
            Sobre
          </a>
          {isOpen && (
            <div className="mt-4 flex w-full justify-center lg:hidden">
              <Button className="bg-brand-primary-800 text-sm uppercase hover:bg-brand-primary-800/90 lg:text-base">
                <a
                  href="https://wa.me/85986681994?text=Ol%C3%A1%2C%20gostaria%20de%20mais%20informações"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  + Info
                </a>
              </Button>
            </div>
          )}
        </nav>
        <div className="hidden items-center gap-2 lg:flex">
          <Button className="bg-brand-primary-800 text-sm uppercase text-brand-primary-100 hover:bg-brand-primary-800/90 lg:text-base">
            <a
              href="https://wa.me/85986681994?text=Ol%C3%A1%2C%20gostaria%20de%20mais%20informações"
              target="_blank"
              rel="noopener noreferrer"
            >
              + Info
            </a>
          </Button>
        </div>
      </div>
    </div>
  )
}
