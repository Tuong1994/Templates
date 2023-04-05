import React from "react";
import Carousel from "./Carousel";
import Category from "./Category";
import useLangStore from "store/LangStore";

interface HomeProps {}

const Home: React.FC<HomeProps> = (props) => {
  const langs = useLangStore((state) => state.langs);

  const categories = [
    { id: 1, title: langs?.home.carousel.slideTitle_1 },
    { id: 2, title: langs?.home.carousel.slideTitle_2 },
    { id: 3, title: langs?.home.carousel.slideTitle_3 },
    { id: 4, title: langs?.home.carousel.slideTitle_4 },
  ];

  return (
    <div className="home">
      <Carousel langs={langs} />

      {categories.map((c) => (
        <Category key={c.id} title={c.title ?? ""} langs={langs} />
      ))}
    </div>
  );
};

export default Home;
