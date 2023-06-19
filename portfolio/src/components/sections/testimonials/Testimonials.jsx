import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper";

import "swiper/swiper-bundle.css";
import "./testimonials.scss";
import TestimonialSlide from "./slides/TestimonialSlide";

import { OpenAI } from "openai";
import { useEffect, useState } from "react";

const openai = new OpenAI("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");
//SwiperCore.use([Navigation, Pagination]);

export default function Testimonials() {
  // const [data, setData] = useState(null);

  // useEffect(() => {
  //   generateData();
  // });

  // async function generateData() {
  //   const description = await generateDescription();
  //   const name = await generateName();
  //   const img = await generateImage(name);
  //   const stars = generateRandomStars();

  //   const generatedData = {
  //     name: name,
  //     description: description,
  //     img: img,
  //     start: stars,
  //   };

  //   setData(generatedData);
  // }

  // async function generateDescription() {
  //   // Use OpenAI GPT-3.5 model to generate a description
  //   const prompt = "Generate a description for a person.";
  //   const response = await openai.complete({
  //     engine: "text-davinci-003",
  //     prompt: prompt,
  //     maxTokens: 100,
  //   });

  //   const generatedDescription = response.choices[0].text.trim();
  //   return generatedDescription;
  // }

  // async function generateName() {
  //   // Use OpenAI GPT-3.5 model to generate a name
  //   const prompt = "Generate a name for a person.";
  //   const response = await openai.complete({
  //     engine: "text-davinci-003",
  //     prompt: prompt,
  //     maxTokens: 5,
  //   });

  //   const generatedName = response.choices[0].text.trim();
  //   return generatedName;
  // }

  // // Fictional image generation function
  // function generateImage(name) {
  //   // Use your preferred image generation library or service to generate an image based on the name
  //   // This is a fictional placeholder implementation
  //   const generatedImage = `https://example.com/generate-image?name=${encodeURIComponent(
  //     name
  //   )}`;
  //   return generatedImage;
  // }

  // function generateRandomStars() {
  //   // Generate a random number of stars (e.g., between 1 and 5)
  //   const generatedStars = Math.floor(Math.random() * 5) + 1;
  //   return generatedStars;
  // }

  // if (!data) {
  //   return <div>Loading...</div>;
  // }

  const slides = [];
  const slidesInfo = [
    {
      name: "Sara Smith",
      description:
        "I get a good impression, I carry out my project with all the possible quality and attention and support 24h a day.",
      img: "assets/img/perfil.JPG",
      stars: 5,
    },
    {
      name: "Pepe Vilches",
      description:
        "I get a good impression, I carry out my project with all the possible quality and attention and support 24h a day.",
      img: "assets/img/perfil.JPG",
      stars: 5,
    },
    {
      name: "Nacho Carreras",
      description:
        "I get a good impression, I carry out my project with all the possible quality and attention and support 24h a day.",
      img: "assets/img/perfil.JPG",
      stars: 5,
    },
  ];

  for (let i = 0; i < slidesInfo.length; i += 1) {
    slides.push(
      <SwiperSlide key={`slide-${i}`} tag="li">
        <TestimonialSlide
          name={slidesInfo[i].name}
          description={slidesInfo[i].description}
          slideNumber={i}
          img={slidesInfo[i].img}
          stars={slidesInfo[i].stars}
        />
      </SwiperSlide>
    );
  }

  return (
    <section class="testimonial section" id="testimonials">
      <h2 class="section__title">Testimonial</h2>
      <span class="section__subtitle">What my clients are saying</span>

      <div className="testimonial__container container swiper-container">
        <Swiper
          id="testimonialSwiper"
          tag="div"
          wrapperTag="ul"
          class="swiper-wrapper"
          navigation
          pagination
        >
          {slides}
        </Swiper>
      </div>
    </section>
  );
}
