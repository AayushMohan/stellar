"use client";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { Button } from "./ui/button";

const Collections = () => {
  const images = [
    "https://www.strandbags.co.nz/cdn/shop/files/CTA_TILES_SMALL_5.png?v=1737608516&width=528",
    "https://www.strandbags.co.nz/cdn/shop/files/CTA_TILES_SMALL_5_94137e0b-1969-45a5-8868-372e73c291ec.png?v=1738112562&width=528",
    "https://www.strandbags.co.nz/cdn/shop/files/CTA_TILE_FASHION-1_b0c20d1c-72a1-4f01-8fc8-657f04627dda.png?v=1738040719&width=528",
    "https://www.strandbags.co.nz/cdn/shop/files/CTA_TILES_SMALL_f185e12f-3108-4f89-8917-d1eecdb48709.png?v=1739238228&width=528",
  ];
  return (
    <div className="items-center justify-center flex flex-col">
      <h1 className="p-10 text-start mt-2 text-4xl">Explore New Season</h1>
      <Carousel className="w-full max-w-7xl">
        <CarouselContent className="mr-0">
          {Array.from({ length: 8 }).map((_, index) => (
            <CarouselItem key={index} className="basis-1/4 ">
              <div className="">
                <Card>
                  <CardContent className="flex aspect-square items-center justify-center p-0">
                    <Image
                      src={images[index % images.length]}
                      alt=""
                      width={300}
                      height={300}
                      className=""
                    />
                  </CardContent>
                  <div className="p-4">
                    <h1 className="font-bold pb-4">New Season</h1>
                    <p>
                      New Season, new adventures. Discover our latest arrivals
                      designed to move with you.
                    </p>
                  </div>
                  <Button className="font-bold text-sm" variant={"ghost"}>
                    Shop Now
                  </Button>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};
export default Collections;
