import { useEffect, useRef, useState } from "react";
import "./style.css";
function CarouselItems() {
  return <div className="box" draggable="false">Box</div>;
}

export default function Carousel() {
  const ref = useRef();
  const handleClickleft = ()=>{
    console.log(ref.current)
    console.log("clicked")
    ref.current.scrollLeft = ref.current.scrollLeft - 500;

  }
  const handleClickright = ()=>{
    console.log("clicked")
    ref.current.scrollLeft = ref.current.scrollLeft + 500;

  }
  return (
    <div className="carousel" ref={ref} >
      <p className="left" onClick={()=>handleClickleft()}>O</p>

      <CarouselItems />
      <CarouselItems />
      <CarouselItems />
      <CarouselItems />
      <CarouselItems />
      <CarouselItems />
      <CarouselItems />
      <CarouselItems />
      <CarouselItems />
      <CarouselItems />
      <CarouselItems />
      <CarouselItems />
      <CarouselItems />
      <CarouselItems />
      <CarouselItems />
      <CarouselItems />
      <CarouselItems />
      <CarouselItems />
      <CarouselItems />
      <CarouselItems />
      <CarouselItems />
      <CarouselItems />
      <CarouselItems />

      <p className="right" onClick={()=>handleClickright()}>O</p>
    </div>
  );
}
