import { Button } from '../ui/button'

export function Header() {
  return (
    <div className="border-b bg-brand-primary-500">
      <div className=" flex items-center justify-between gap-6 px-6">
        <div className="border-r pr-4">
          <img src="/src/assets/images/logotipo.png" alt="" className="py-1" />
        </div>
        <nav className="flex items-center gap-40 space-x-4 uppercase tracking-wide text-brand-primary-800 lg:space-x-6">
          <a href="/">Início</a>
          <a href="#">Serviços</a>
          <a href="#">Atendimento</a>
          <a href="#">Sobre</a>
        </nav>

        <div className="flex items-center gap-2">
          <Button className="bg-brand-primary-600 uppercase hover:bg-brand-primary-600/90">
            + Info
          </Button>
        </div>
      </div>
    </div>
  )
}
