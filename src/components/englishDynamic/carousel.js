import { useEffect, useContext, useState } from "react";
import AboriginalFlag from "../assets/aboriginal.png"
import TorresStraitFlag from "../assets/torres.png"
import AboriginalHuman from "../assets/aboriginalCool.jpg"

function Carousel() {
return(
    
    <div id="carouselExampleIndicators" class="carousel slide relative" data-bs-ride="carousel">
      <div class="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="0"
          class="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div class="carousel-inner relative w-full overflow-hidden">
        <div class="carousel-item active float-left w-full">
          <img
            src={AboriginalFlag}
            class="block w-full"
            alt="Wild Landscape"
            height={500}
          />
        </div>
        <div class="carousel-item float-left w-full h-full ">
          <img
            src={AboriginalFlag}
            class="block w-full h-full"
            alt="Camera"
            height={500}
          />
        </div>
        <div class="carousel-item float-left w-full">
          <img
            src={TorresStraitFlag}
            class="block w-full"
            alt="Exotic Fruits"
            height={500}
          />
        </div>
      </div>
      <button
        class="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
)
}
export default Carousel;