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
    <footer className="relative h-full bg-gradient-to-r from-brand-primary-400 to-brand-secondary-400 lg:pt-28">
      <img
        src="/src/assets/images/background-2.png"
        alt=""
        className="absolute hidden lg:bottom-0 lg:left-0 lg:block"
      />
      <div className="container mx-auto flex flex-col justify-center px-4 py-10 text-center">
        <div className="flex w-full items-center justify-center">
          <CarouselSpacing />
        </div>
        <div className="mt-6">
          <h2 className="mb-4 font-Philosopher text-2xl font-semibold text-brand-primary-100">
            Acompanhe-nos nas redes sociais
          </h2>
          <div className="mb-6 flex items-center justify-center space-x-6">
            <a
              href="https://www.instagram.com/karinefreiree"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-secondary-500 hover:text-brand-secondary-500/90"
            >
              <Instagram size={32} />
            </a>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-secondary-500 hover:text-brand-secondary-500/90"
            >
              <Facebook size={32} />
            </a>
            <a
              href="https://wa.me/85986681994?text=Ol%C3%A1%2C%20gostaria%20de%20mais%20informações"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-secondary-500 hover:text-brand-secondary-500/90"
            >
              <MessageCircleQuestion size={32} />
            </a>
          </div>
          <div className="flex flex-col items-center justify-center gap-4 text-center sm:flex-row sm:gap-8 sm:text-left">
            <a
              href="https://www.google.com/maps/dir//Av.+Penetra%C3%A7%C3%A3o+Norte,+115+-+apt+101+-+Conj.+Esperan%C3%A7a,+Fortaleza+-+CE,+60763-420/@-3.8150086,-38.6698571,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x7c74deb0806e233:0x4960ead04a603a9e!2m2!1d-38.5874738!2d-3.8150317?entry=ttu&g_ep=EgoyMDI0MDgyMC4xIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-brand-primary-100 hover:text-brand-secondary-500"
            >
              <MapPin size={24} />
              <span>Clínica Integrada Esperança</span>
            </a>

            <a
              href="mailto:karinefreirefisio@gmail.com"
              className="flex items-center gap-2 text-brand-primary-100 hover:text-brand-secondary-500"
            >
              <Mail size={24} />
              <span>karinelopes_freire@hotmail.com</span>
            </a>

            <a
              href="tel:+5585992745571"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-brand-primary-100 hover:text-brand-secondary-500"
            >
              <PhoneCall size={24} />
              <span>(85) 99274-5571</span>
            </a>
          </div>
        </div>
        <p className="mt-6 text-brand-primary-100">
          LFSolutions © 2024 - Todos os direitos reservados.
        </p>
        <img
          src="/src/assets/images/background.png"
          alt=""
          className="absolute bottom-0 right-0 hidden lg:block"
        />
      </div>
    </footer>
  )
}
