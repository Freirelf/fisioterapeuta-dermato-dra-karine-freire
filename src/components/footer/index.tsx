import {
  Facebook,
  Instagram,
  Mail,
  MapPin,
  MessageCircleQuestion,
  PhoneCall,
} from 'lucide-react'

import { CarouselSpacing } from './carousel'

export function Footer() {
  return (
    <footer className="h-full bg-gradient-to-r from-brand-primary-700 to-brand-primary-750 lg:pt-28">
      <div className="container mx-auto flex flex-col justify-center px-4 py-10 text-center">
        <div className="flex w-full items-center justify-center">
          <CarouselSpacing />
        </div>
        <div className="mt-6">
          <h2 className="mb-4 text-lg font-semibold text-brand-primary-100">
            Acompanhe-nos nas redes sociais
          </h2>
          <div className="mb-6 flex items-center justify-center space-x-6">
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-primary-700 hover:text-brand-primary-300"
            >
              <Instagram size={32} />
            </a>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-primary-700 hover:text-brand-primary-300"
            >
              <Facebook size={32} />
            </a>
            <a
              href="https://www.whatsapp.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-primary-700 hover:text-brand-primary-300"
            >
              <MessageCircleQuestion size={32} />
            </a>
          </div>
          <div className="flex flex-col items-center justify-center gap-4 text-center sm:flex-row sm:gap-8 sm:text-left">
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-brand-primary-100 hover:text-brand-primary-300"
            >
              <MapPin size={24} />
              <span>Clínica Integrada Esperança</span>
            </a>
            <a
              href="mailto:karinefreirefisio@gmail.com"
              className="flex items-center gap-2 text-brand-primary-100 hover:text-brand-primary-300"
            >
              <Mail size={24} />
              <span>karinelopes_freire@hotmail.com</span>
            </a>
            <a
              href="tel:+558599915558"
              className="flex items-center gap-2 text-brand-primary-100 hover:text-brand-primary-300"
            >
              <PhoneCall size={24} />
              <span>(85) 99274-5571</span>
            </a>
          </div>
        </div>
        <p className="mt-6 text-brand-primary-100">
          LFSolutions © 2024 - Todos os direitos reservados.
        </p>
      </div>
    </footer>
  )
}
