import { Button } from '../ui/button'

export function Services() {
  return (
    <div className="container mx-auto mt-28 max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col items-center justify-between space-y-8 lg:flex-row lg:space-x-8 lg:space-y-0">
        <div className="relative w-full flex-1 lg:w-1/2">
          <h1 className="lg:left absolute top-60 w-full font-Philosopher text-xl font-bold text-brand-primary-50 lg:top-80 lg:w-80 lg:text-2xl">
            Mergulhe em um universo de{' '}
            <span className="text-brand-secondary-800">bem-estar</span> em nosso
            consultório.
          </h1>
          <img
            src="/src/assets/images/image-estetica-service.png"
            alt=""
            className="mx-auto rounded-[38%] lg:mx-0"
          />
          <img
            src="/src/assets/images/fly.png"
            alt=""
            className="absolute left-[80%] top-1 w-28 -translate-x-1/2 transform lg:w-44 "
          />
        </div>

        <div className="w-full flex-1 lg:w-1/2 lg:text-left">
          <img
            src="src/assets/images/image-estetica-4.png"
            alt=""
            className="mx-auto mt-2 rounded-full lg:w-auto"
          />
          <h1 className="mt-4 font-Philosopher text-2xl font-bold text-brand-primary-50 lg:text-3xl ">
            Revele a sua{' '}
            <span className="text-brand-secondary-800">beleza natural</span> com
            a renomada especialista Dra.{' '}
            <span className="text-brand-secondary-800">Karine Freire.</span>
          </h1>
          <p className="mt-4 text-brand-primary-50">
            Experimente tratamentos personalizados e descubra uma nova versão de
            você. Confie sua beleza às mãos de quem entende do assunto.
          </p>
          <Button className="mx-auto mt-4 block bg-brand-primary-600 hover:bg-brand-primary-600/90">
            {' '}
            Agendar{' '}
          </Button>
        </div>
      </div>
    </div>
  )
}
