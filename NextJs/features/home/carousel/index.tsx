import React from "react";
import * as Components from "@/components";
import { ISlideItem } from "@/common/interface/slider";
import { Langs } from "@/lang";
import CarouselItem from "./Item";

interface CarouselProps {
  langs: Langs;
}

const Carousel: React.FC<CarouselProps> = ({ langs }) => {
  const list: ISlideItem[] = [
    {
      id: 1,
      content: (
        <CarouselItem
          langs={langs}
          title={langs?.home.carousel.slideTitle_1 ?? ""}
          content={langs?.home.carousel.content_1 ?? ""}
          imgUrl="/images/product/pc.png"
          imgSize="md"
          link="/"
        />
      ),
    },
    {
      id: 2,
      content: (
        <CarouselItem
          langs={langs}
          title={langs?.home.carousel.slideTitle_2 ?? ""}
          content={langs?.home.carousel.content_2 ?? ""}
          imgUrl="/images/product/accessories.png"
          link="/"
        />
      ),
    },
    {
      id: 3,
      content: (
        <CarouselItem
          langs={langs}
          title={langs?.home.carousel.slideTitle_3 ?? ""}
          content={langs?.home.carousel.content_3 ?? ""}
          imgUrl="/images/product/monitor-gaming.png"
          link="/"
        />
      ),
    },
    {
      id: 4,
      content: (
        <CarouselItem
          langs={langs}
          title={langs?.home.carousel.slideTitle_4 ?? ""}
          content={langs?.home.carousel.content_4 ?? ""}
          imgUrl="/images/product/laptop-gaming.png"
          link="/"
        />
      ),
    },
  ];

  return (
    <Components.Carousel.Horizontal
      rootClass="home-carousel"
      slides={list}
      autoPlay
      stopSlide
      inifine
    />
  );
};

export default Carousel;
