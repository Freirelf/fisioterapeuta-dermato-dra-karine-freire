import { Card, CardContent } from '@/components/ui/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'

const images = [
  'images/perfil.jpeg',
  'images/profile.jpeg',
  'images/atendimento.jpeg',
  'images/local.jpeg',
  'images/image-about-2.jpeg',
  'images/image-about.jpeg',
  'images/image-about-bg.png',
]

export function CarouselSpacing() {
  return (
    <Carousel className="w-full max-w-60 lg:max-w-4xl">
      <CarouselContent className="-ml-1">
        {images.map((src, index) => (
          <CarouselItem key={index} className="basis-1/2 pl-1 lg:basis-1/4">
            <div className="p-1">
              <Card>
                <CardContent className="relative flex aspect-square items-center justify-center p-6">
                  <img
                    src={src}
                    alt={`Imagem ${index + 1}`}
                    className="absolute inset-0 h-full w-full rounded object-cover object-top"
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
