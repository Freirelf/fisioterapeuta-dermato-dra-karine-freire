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
    <div className="relative border-b border-brand-primary-800 bg-brand-primary-500">
      <div className="flex items-center justify-between px-6">
        <div className="border-r border-brand-primary-800 pr-4">
          <img
            src="/src/assets/images/logotipo.png"
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
          } absolute left-0 right-0 top-16 z-50 border-y border-brand-primary-800 bg-brand-primary-500 p-4 text-center text-sm uppercase tracking-wide text-brand-primary-800 lg:static lg:flex lg:items-center lg:gap-40 lg:space-x-4 lg:border-none lg:text-base`}
        >
          <a
            className="block py-2 hover:text-brand-primary-900 lg:py-0"
            href="/"
          >
            Início
          </a>
          <a
            className="block py-2 hover:text-brand-primary-900 lg:py-0"
            href="#"
          >
            Serviços
          </a>
          <a
            className="block py-2 hover:text-brand-primary-900 lg:py-0"
            href="#"
          >
            Atendimento
          </a>
          <a
            className="block py-2 hover:text-brand-primary-900 lg:py-0"
            href="#"
          >
            Sobre
          </a>
          {isOpen && (
            <div className="mt-4 flex w-full justify-center lg:hidden">
              <Button className="bg-brand-primary-600 text-sm uppercase hover:bg-brand-primary-200/90 lg:text-base">
                + Info
              </Button>
            </div>
          )}
        </nav>
        <div className="hidden items-center gap-2 lg:flex">
          <Button className="bg-brand-primary-600 text-sm uppercase hover:bg-brand-primary-200/90 lg:text-base">
            + Info
          </Button>
        </div>
      </div>
    </div>
  )
}
