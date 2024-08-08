import { Instagram } from 'lucide-react'

import { Button } from '../ui/button'

export function Home() {
  return (
    <div className=" relative flex flex-col items-center justify-between bg-gradient-to-r from-brand-primary-400 to-brand-primary-600 p-4 lg:flex-row lg:p-8">
      <div className="z-10 h-full w-full max-w-[484px] shadow-md lg:h-[645px]">
        <img
          src="/src/assets/images/profile.jpeg"
          alt=""
          className="z-0 h-full w-full rounded-md object-cover"
        />
      </div>
      <img
        src="/src/assets/images/background-2.png"
        alt=""
        className="absolute hidden lg:bottom-6 lg:left-80 lg:block"
      />

      <div className="z-50 flex w-full max-w-[985px] flex-col items-center gap-5 pl-1 pt-10 lg:w-[1100px] lg:items-start">
        <h1 className=" font-Bodoni text-3xl font-bold text-brand-secondary-800 drop-shadow-lg lg:text-left lg:text-6xl">
          Dra. Karine Freire
        </h1>
        <h1 className="text-center font-Philosopher text-3xl font-bold text-brand-primary-100 drop-shadow-lg lg:text-left lg:text-5xl">
          Fisioterapia Dermatofuncional
        </h1>
        <p className="max-w-lg text-center text-sm lg:text-left lg:text-base">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur
          cumque tempora praesentium modi inventore, deleniti vel facere,
          temporibus hic labore iure repudiandae vitae harum. Fugit tempora
          eveniet aut quia quaerat.
        </p>
        <div className="flex flex-col gap-4 lg:flex-row">
          <Button className="bg-brand-secondary-800 text-sm uppercase hover:bg-brand-secondary-800/90 lg:text-base">
            Agende sua consulta
          </Button>
          <Button className=" bg-brand-primary-100 text-sm uppercase text-brand-secondary-800 hover:bg-brand-primary-200/90 lg:text-base">
            <a href="" className="flex items-center gap-3">
              Conheça mais.. <Instagram />
            </a>
          </Button>
        </div>
      </div>
      <img
        src="/src/assets/images/background.png"
        alt=""
        className="absolute right-0"
      />
    </div>
  )
}
