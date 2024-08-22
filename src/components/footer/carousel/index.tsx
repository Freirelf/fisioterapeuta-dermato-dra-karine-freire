import { Card, CardContent } from '@/components/ui/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'

const images = [
  '/src/assets/images/estetica-image-1.png',
  '/src/assets/images/estetica-image-2.png',
  '/src/assets/images/estetica-image-3.png',
  '/src/assets/images/image-epcd.png',
  '/src/assets/images/image-service.png',
  '/src/assets/images/image-service.png',
  '/src/assets/images/image-service.png',
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
                    className="absolute inset-0 h-full w-full object-cover"
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
