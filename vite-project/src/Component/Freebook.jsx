import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import axios from 'axios';
import Allbook from './Allbook.jsx';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Freebook = () => {
  const [books, setBooks] = useState([]); 
  const API_BASE_URL= import.meta.env.VITE_API_BASE_URL || 'http://localhost:4000'

  useEffect(() => {
    const getbook = async () => {
      try {
        const res = await axios.get(`${API_BASE_URL}/book`);
      
        setBooks(res.data.filter((data) => data.category === "free"));
      } catch (error) {
        console.log("Error fetching books:", error);
        
      }
    };
    getbook();
  }, []);

  
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  if (books.length === 0) {
    return <p className="text-center">No free books available at the moment.</p>;
  }

  return (
    <>
      <div className="slider-container p-4 sm:p-8 md:p-12">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-4 sm:mb-6">
          Free Offered Courses
        </h1>
        <p className="px-4 sm:px-8 md:px-12 text-base sm:text-lg text-center mb-6 sm:mb-8">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque velit, ad natus
          adipisci ipsum ex vero recusandae voluptate ipsa, et omnis doloribus, iusto maiores
          eveniet incidunt unde. Sequi, dolorum vel.
        </p>
        <Slider {...settings}>
          {books.map((item) => (
            <Allbook item={item} key={item.id || item.name} />
          ))}
        </Slider>
      </div>
    </>
  );
};

export default Freebook;
