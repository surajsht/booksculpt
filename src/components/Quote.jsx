import { bookQuotes } from "../QuoteData";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const Quote = () => {
  return (
    <div className="quote-container">
      <Swiper
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
        }}
        speed={900}
        loop={true}
        slidesPerView={1}
        spaceBetween={24}
        modules={[Autoplay]}
      >
        {bookQuotes.map((data) => {
          let { id, quote, author } = data;
          return (
            <SwiperSlide key={id}>
              <div className="quote-data">
                <h2 className="quote"> {`"${quote}"`} </h2>
                <span className="quote-author-name"> {`— ${author}`} </span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Quote;
