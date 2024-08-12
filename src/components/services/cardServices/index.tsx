import { MoveRight } from 'lucide-react'

interface CardServicesProps {
  title: string
  description: string
  image: string
}

export function CardServices({ title, description, image }: CardServicesProps) {
  return (
    <div className="container my-2 flex flex-col items-center gap-4 border-b p-4 lg:flex-row lg:items-start lg:border-none">
      <div className="flex flex-col gap-4 lg:w-1/2">
        <h1 className="font-Philosopher text-lg font-semibold text-brand-secondary-800 lg:text-xl">
          {title}
        </h1>
        <p className="text-sm lg:text-base">{description}</p>
        <MoveRight className="h-5 w-5 text-brand-primary-50 lg:h-6 lg:w-6" />
      </div>
      <div className="w-[50%]">
        <img src={image} alt={title} className="w-full rounded" />
      </div>
    </div>
  )
}
