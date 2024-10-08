import { Instagram } from 'lucide-react'

import { Button } from '../ui/button'

export function Home() {
  return (
    <div
      id="home"
      className=" relative flex flex-col items-center justify-between bg-gradient-to-r from-brand-primary-400 to-brand-secondary-400 p-4 lg:flex-row lg:p-0"
    >
      <div className="z-10 h-full w-full max-w-[484px] lg:h-[645px]">
        <img
          src="images/profile-s.png"
          alt=""
          className="z-0 mx-auto mr-4 h-full w-[80%] rounded-md object-cover lg:mr-0 lg:w-full"
        />
      </div>
      <img
        src="images/background-2.png"
        alt=""
        className="absolute hidden lg:bottom-0 lg:left-80 lg:block"
      />

      <div className="z-50 flex w-full max-w-[985px] flex-col items-center gap-5 pl-1 pt-4 lg:w-[1100px] lg:items-start lg:pt-10">
        <h1 className=" font-Bodoni text-3xl font-bold text-brand-primary-800 drop-shadow-lg lg:text-left lg:text-7xl">
          Dra. Karine Freire
        </h1>
        <h1 className="text-center font-Philosopher text-2xl font-bold text-brand-primary-100 drop-shadow-lg lg:text-left lg:text-5xl">
          Fisioterapia Dermatofuncional
        </h1>
        <h1 className="text-center font-Philosopher text-2xl font-bold text-brand-primary-800  lg:text-left lg:text-3xl">
          Tratamentos Personalizados para Resultados Reais
        </h1>
        <p className="max-w-lg text-center text-sm text-brand-primary-100 lg:text-justify lg:text-base lg:tracking-wider">
          Acreditamos que cada pessoa é única. Por isso, todos os tratamentos
          são cuidadosamente adaptados às necessidades individuais, garantindo
          resultados visíveis e duradouros. O compromisso com o bem-estar e a
          autoestima dos pacientes está no centro de tudo o que fazemos.
        </p>
        <div className="flex flex-col gap-4 lg:flex-row">
          <Button className="bg-brand-primary-800  text-sm hover:bg-brand-primary-800/90 lg:text-base">
            <a
              href="https://wa.me/+5585986681994?text=Ol%C3%A1%2C%20gostaria%20de%20marcar%20uma%20consulta"
              target="_blank"
              rel="noopener noreferrer"
            >
              Agende sua consulta
            </a>
          </Button>
          <Button className=" bg-brand-primary-500 text-sm text-brand-primary-900  hover:bg-brand-primary-100/90 lg:text-base">
            <a
              href="https://www.instagram.com/karinefreiree"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3"
            >
              Conheça mais.. <Instagram />
            </a>
          </Button>
        </div>
      </div>
      <img src="images/background.png" alt="" className="absolute right-0" />
    </div>
  )
}
