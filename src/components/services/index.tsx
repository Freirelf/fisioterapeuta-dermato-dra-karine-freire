import { useRef, useState } from 'react'

import { services } from '@/lib/mocks'

import { Button } from '../ui/button'
import { CardServices } from './cardServices'

export function Services() {
  const [visibleCardServices, setVisibleCardServices] = useState(false)

  const cardsContainerRef = useRef<HTMLDivElement | null>(null)
  const handleShowMore = () => {
    setVisibleCardServices(!visibleCardServices)
  }

  if (visibleCardServices) {
    cardsContainerRef.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  }

  const visibleServices = visibleCardServices ? services : services.slice(0, 4)

  return (
    <>
      <div
        id="services"
        className="container mx-auto mt-28 max-w-7xl px-4 pb-8 sm:px-6 lg:px-8"
      >
        <div className="flex flex-col items-center justify-between space-y-8 lg:flex-row lg:space-x-8 lg:space-y-0">
          <div className="relative w-full flex-1 lg:w-1/2">
            <h1 className="lg:left absolute top-60 w-full font-Philosopher text-xl font-bold text-brand-primary-50 lg:top-80 lg:w-80 lg:text-2xl">
              Mergulhe em um universo de{' '}
              <span className="text-brand-secondary-800">bem-estar</span> em
              nosso consultório.
            </h1>
            <img
              src="images/image-estetica-service.png"
              alt=""
              className="mx-auto rounded-[38%] lg:mx-0"
            />
            <img
              src="images/fly.png"
              alt=""
              className="absolute left-[80%] top-1 w-28 -translate-x-1/2 transform lg:w-44 "
            />
          </div>

          <div className="w-full flex-1 lg:w-1/2 lg:text-left">
            <img
              src="images/image-estetica-4.png"
              alt=""
              className="mx-auto mt-2 rounded-full lg:w-auto"
            />
            <h1 className="mt-4 font-Philosopher text-2xl font-bold text-brand-primary-50 lg:text-3xl ">
              Revele a sua{' '}
              <span className="text-brand-secondary-800">beleza natural</span>{' '}
              com a renomada especialista Dra.{' '}
              <span className="text-brand-secondary-800">Karine Freire.</span>
            </h1>
            <p className="mt-4 text-brand-primary-50">
              Experimente tratamentos personalizados e descubra uma nova versão
              de você. Confie sua beleza às mãos de quem entende do assunto.
            </p>
            <Button className="mx-auto mt-4 block bg-brand-secondary-500 hover:bg-brand-secondary-500/90">
              <a
                href="https://wa.me/+5585986681994?text=Ol%C3%A1%2C%20gostaria%20de%20mais%20informações"
                target="_blank"
                rel="noopener noreferrer"
              >
                Agendar
              </a>
            </Button>
          </div>
        </div>
        <div className="lg:my-20 lg:px-8">
          <h1 className="mx-auto block max-w-2xl py-8 text-center font-Philosopher text-2xl font-bold text-brand-primary-50 lg:text-3xl">
            Acredito que a verdadeira beleza vem de dentro. É como{' '}
            <span className="text-brand-secondary-800">você se sente..</span>
          </h1>
          <div className="ref={cardsContainerRef} grid grid-cols-1 gap-4 lg:my-20 lg:grid-cols-2">
            {visibleServices.map((service, index) => (
              <CardServices key={index} {...service} />
            ))}
            <div className="col-span-full mt-8 flex justify-center">
              <Button
                onClick={handleShowMore}
                className="bg-brand-secondary-500 hover:bg-brand-secondary-500/90"
              >
                {visibleCardServices ? 'Recolher' : 'Todas Especialidades'}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
