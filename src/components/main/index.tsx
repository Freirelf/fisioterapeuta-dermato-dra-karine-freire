import { Button } from '../ui/button'

export function Main() {
  return (
    <>
      <main className="mt-14 flex items-center justify-center p-4 lg:mt-28">
        <section className="max-w-7xl text-center">
          <h1 className="leading-wider font-Philosopher text-2xl font-bold text-brand-primary-50 lg:text-5xl">
            Sua <span className="text-brand-secondary-800">jornada</span>{' '}
            <img
              src="/src/assets/images/estetica-image.png"
              alt="Journey"
              className="inline-block h-8 w-8 rounded-full object-cover lg:h-12 lg:w-32"
            />{' '}
            para a beleza e a autoconfiança começa aqui. Meu propósito é formar
            uma parceria de{' '}
            <span className="text-brand-secondary-800">confiança</span>{' '}
            <img
              src="/src/assets/images/estetica-image-1.png"
              alt="Trusted"
              className="inline-block h-8 w-8 rounded-full object-cover lg:h-12 lg:w-36"
            />{' '}
            para descobrir o{' '}
            <span className="text-brand-secondary-800">segredo</span>{' '}
            <img
              src="/src/assets/images/estetica-image-2.png"
              alt="Both"
              className="inline-block h-8 w-8 rounded-full object-cover lg:h-12 lg:w-32"
            />{' '}
            da sua beleza por dentro e por fora.
          </h1>
        </section>
      </main>

      <section className="mt-10 py-12">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative flex flex-col items-center justify-between border-y py-10 lg:flex-row">
            <span className="text-4xl font-bold text-brand-secondary-400 sm:text-5xl lg:text-6xl">
              06+
            </span>
            <img
              src="/src/assets/images/estetica-image-3.png"
              alt="Branch In World"
              className="mt-4 h-20 w-20 -rotate-12 transform rounded-full sm:h-40 sm:w-40 lg:absolute lg:left-1/2 lg:top-12 lg:h-40 lg:w-64 lg:-translate-x-1/2 lg:-translate-y-1/2"
            />
            <p className="mt-2 text-center text-brand-primary-50 lg:text-left">
              Especialidades Faciais
            </p>
          </div>

          <div className="relative mt-4 flex flex-col items-center justify-between border-y py-10 lg:flex-row">
            <span className="text-4xl font-bold text-brand-secondary-400 sm:text-5xl lg:text-6xl">
              05+
            </span>
            <img
              src="/src/assets/images/icon-ex.png"
              alt="Years Of Experience"
              className="mt-4 h-16 w-16 sm:h-20 sm:w-20 lg:mt-0"
            />
            <p className="mt-2 text-center text-brand-primary-50 lg:text-left">
              Anos de Experiência
            </p>
          </div>

          <div className="relative mt-4 flex flex-col items-center justify-between border-y py-10 lg:flex-row">
            <span className="text-4xl font-bold text-brand-secondary-400 sm:text-5xl lg:text-6xl">
              08+
            </span>
            <img
              src="/src/assets/images/estetica-c-image.png"
              alt="Professional Surgeon"
              className="mt-4 h-20 w-20 -rotate-12 transform rounded-full sm:h-40 sm:w-40 lg:absolute lg:left-1/2 lg:top-12 lg:h-40 lg:w-64 lg:-translate-x-1/2 lg:-translate-y-1/2"
            />
            <p className="mt-2 text-center text-brand-primary-50 lg:text-left">
              Especialidades Corporais
            </p>
          </div>

          <div className="relative mt-4 flex flex-col items-center justify-between border-y py-10 lg:flex-row">
            <span className="text-4xl font-bold text-brand-secondary-400 sm:text-5xl lg:text-6xl">
              200+
            </span>
            <img
              src="/src/assets/images/icon-ex.png"
              alt="Satisfied Customers"
              className="mt-4 h-16 w-16 sm:h-20 sm:w-20 lg:mt-0"
            />
            <p className="mt-2 text-center text-brand-primary-50 lg:text-left">
              Pacientes Satisfeitos
            </p>
          </div>

          <Button className="mx-auto mt-8 block bg-brand-secondary-500 text-sm hover:bg-brand-secondary-500/90">
            <a href="#">Entre em contato</a>
          </Button>
        </div>
      </section>
    </>
  )
}
