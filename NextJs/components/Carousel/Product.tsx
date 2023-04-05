import React from "react";
import * as Antd from "antd";
import { ISlideItem } from "@/common/interface/slider";
import {
  CaretLeftFilled,
  CaretRightFilled,
  MenuOutlined,
} from "@ant-design/icons";

interface ProductSliderProps {
  slides?: ISlideItem[];
  slideId?: string;
  inifine?: boolean;
  autoPlay?: boolean;
  stopSlide?: boolean;
  timer?: number;
  placement?: "left" | "right";
  rootClass?: string;
  navClass?: string;
  containterClass?: string;
  wrapperClass?: string;
  prevBtnClass?: string;
  nextBtnClass?: string;
  dropdownClass?: string;
}

const defaultItems: ISlideItem[] = [
  { id: 1, content: "Slide 1", subContent: "Slide 1" },
  { id: 2, content: "Slide 2", subContent: "Slide 2" },
  { id: 3, content: "Slide 3", subContent: "Slide 3" },
  { id: 4, content: "Slide 4", subContent: "Slide 4" },
  { id: 5, content: "Slide 5", subContent: "Slide 5" },
];

const widthSpan = 100;

let interval: any;

const ProductSlider: React.FC<ProductSliderProps> = ({
  slides,
  slideId,
  inifine,
  autoPlay,
  stopSlide,
  timer = 2500,
  placement = "left",
  rootClass = "",
  navClass = "",
  containterClass = "",
  wrapperClass = "",
  prevBtnClass = "",
  nextBtnClass = "",
  dropdownClass = "",
}) => {
  const [items, setItems] = React.useState<ISlideItem[]>(defaultItems);
  const [slidePos, setSlidePos] = React.useState<number>(0);

  const [touchStartPos, setTouchStartPos] = React.useState<number>(0);
  const [touchEndPos, setTouchEndPos] = React.useState<number>(0);
  const [isTouched, setIsTouched] = React.useState<boolean>(false);
  const [isTouchSwiped, setIsTouchSwiped] = React.useState<boolean>(false);

  const [mouseStartPos, setMouseStartPos] = React.useState<number>(0);
  const [mouseEndPos, setMouseEndPos] = React.useState<number>(0);
  const [isClicked, setIsClicked] = React.useState<boolean>(false);
  const [isMouseSwiped, setIsMouseSwiped] = React.useState<boolean>(false);

  const [manualStop, setManualStop] = React.useState<boolean>(
    timer !== undefined
  );

  React.useEffect(() => {
    if (slides) setItems(slides.slice(0, 5));
  }, [slides]);

  React.useEffect(() => {
    if (autoPlay) {
      if (manualStop && !isClicked && !isTouched) {
        interval = setInterval(() => handleNextSlide(), timer);
      }
    }
    return () => clearInterval(interval);
  });

  const translateFullPage = (pos: number) => {
    const translate = -widthSpan * pos;
    for (let i = 0; i < items.length; i++) {
      const el = document.getElementById(
        slideId ? `${slideId}-${i}` : `slide-${i}`
      );
      if (el) el.style.transform = `translateX(${translate}%)`;
    }
  };

  const translatePartialPage = (pos: number) => {
    const currentPos = -slidePos * widthSpan;
    const translate = currentPos + pos;
    for (let i = 0; i < items.length; i++) {
      const el = document.getElementById(
        slideId ? `${slideId}-${i}` : `slide-${i}`
      );
      if (el) el.style.transform = `translateX(${translate}%)`;
    }
  };

  const jumpToSlide = (pos: number) => {
    translateFullPage(pos);
    setSlidePos(pos);
  };

  const renderSlides = () => {
    return items.map((s, i) => (
      <div
        key={s.id}
        id={slideId ? `${slideId}-${i}` : `slide-${i}`}
        className="wrapper-item"
      >
        {s.content}
      </div>
    ));
  };

  const renderNavItems = () => {
    return items.map((s, i) => (
      <div
        key={s.id}
        className={`nav-item ${slidePos === i ? "nav-item--active" : ""}`}
        onClick={() => jumpToSlide(i)}
      >
        {s.subContent}
      </div>
    ));
  };

  const handlePrevSlide = () => {
    let newPos = slidePos;
    if (newPos > 0) newPos = newPos - 1;
    else if (inifine) newPos = items.length - 1;
    translateFullPage(newPos);
    setSlidePos(newPos);
  };

  const handleNextSlide = () => {
    let newPos = slidePos;
    if (newPos < items.length - 1) newPos = newPos + 1;
    else if (inifine) newPos = 0;
    translateFullPage(newPos);
    setSlidePos(newPos);
  };

  const speedAnimation = (t: "fast" | "slow") => {
    for (
      let i = Math.max(0, slidePos - 2);
      i < Math.min(items.length, slidePos + 3);
      i++
    ) {
      const el = document.getElementById(
        slideId ? `${slideId}-${i}` : `slide-${i}`
      );
      if (el) {
        if (t === "fast") el.classList.add("wrapper-item--fast");
        else if (t === "slow") el.classList.remove("wrapper-item--fast");
      }
    }
  };

  const manageStop = () => {
    clearInterval(interval);
    if (stopSlide) setManualStop(false);
  };

  const onPrev = () => {
    manageStop();
    handlePrevSlide();
  };

  const onNext = () => {
    manageStop();
    handleNextSlide();
  };

  const onTouchStart = (e: React.TouchEvent) => {
    manageStop();
    speedAnimation("fast");
    setTouchEndPos(e.targetTouches[0].clientX);
    setTouchStartPos(e.targetTouches[0].clientX);
    setIsTouched(true);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    if (isTouched) {
      setTouchEndPos(e.targetTouches[0].clientX);
      const containerWidth =
        document.getElementById("containerProduct")?.offsetWidth;
      if (containerWidth) {
        const translate =
          ((touchEndPos - touchStartPos) / containerWidth) * widthSpan;
        translatePartialPage(translate);
        setIsTouchSwiped(true);
      }
    }
  };

  const onTouchEnd = (e: React.TouchEvent) => {
    if (isTouchSwiped) {
      speedAnimation("slow");
      if (touchEndPos - touchStartPos > 75) handlePrevSlide();
      else if (touchEndPos - touchStartPos < -75) handleNextSlide();
      else jumpToSlide(slidePos);
    }
    setManualStop(true);
    setIsTouched(false);
    setIsTouchSwiped(false);
  };

  const onMouseStart = (e: React.MouseEvent) => {
    e.preventDefault();
    manageStop();
    speedAnimation("fast");
    setMouseEndPos(e.clientX);
    setMouseStartPos(e.clientX);
    setIsClicked(true);
  };

  const onMouseMove = (e: React.MouseEvent) => {
    e.preventDefault();
    if (isClicked) {
      setMouseEndPos(e.clientX);
      const containerWidth =
        document.getElementById("containerProduct")?.offsetWidth;
      if (containerWidth) {
        const translate =
          ((mouseEndPos - mouseStartPos) / containerWidth) * widthSpan;
        translatePartialPage(translate);
        setIsMouseSwiped(true);
      }
    }
  };

  const onMouseEnd = (e: React.MouseEvent) => {
    if (isMouseSwiped) {
      speedAnimation("slow");
      if (mouseEndPos - mouseStartPos > 100) handlePrevSlide();
      else if (mouseEndPos - mouseStartPos < -100) handleNextSlide();
      else jumpToSlide(slidePos);
    }
    setManualStop(true);
    setIsClicked(false);
    setIsMouseSwiped(false);
  };

  return (
    <div className={`product-slider ${rootClass}`}>
      <div
        className={`product-slider-nav ${navClass}`}
        style={{ order: placement === "left" ? 1 : 2 }}
      >
        {renderNavItems()}
      </div>

      <div
        className={`product-slider-container ${containterClass}`}
        style={{ order: placement === "left" ? 2 : 1 }}
      >
        <button className={`container-btn ${prevBtnClass}`} onClick={onPrev}>
          <CaretLeftFilled className="text-2xl" />
        </button>

        <div
          id="containerProduct"
          className={`container-wrapper ${wrapperClass}`}
          onTouchStart={(e) => onTouchStart(e)}
          onTouchMove={(e) => onTouchMove(e)}
          onTouchEnd={(e) => onTouchEnd(e)}
          onMouseDown={(e) => onMouseStart(e)}
          onMouseMove={(e) => onMouseMove(e)}
          onMouseUp={(e) => onMouseEnd(e)}
          onMouseLeave={(e) => onMouseEnd(e)}
        >
          {renderSlides()}
        </div>

        <button className={`container-btn ${nextBtnClass}`} onClick={onNext}>
          <CaretRightFilled className="text-2xl" />
        </button>

        {/* RESPONSIVE DROPDOWN */}
        <div className={`container-dropdown ${dropdownClass}`}>
          <Antd.Tooltip
            placement="bottomRight"
            rootClassName="dropdown-inner"
            title={<React.Fragment>{renderNavItems()}</React.Fragment>}
            trigger={["click"]}
          >
            <MenuOutlined className="text-white" />
          </Antd.Tooltip>
        </div>
      </div>
    </div>
  );
};

export default ProductSlider;
