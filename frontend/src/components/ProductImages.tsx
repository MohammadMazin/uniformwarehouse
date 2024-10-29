import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function ProductImages({ images }: { images: string[] }) {
  return (
    <Carousel className="w-full max-w-xs">
      <CarouselContent>
        {images.map((img, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <img
                src={img}
                alt="Product"
                className="h-auto w-full rounded-xl drop-shadow-sm cursor-grab"
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
