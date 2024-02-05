import React from "react";
import SwiperReview from "./Swiper";
import "./review-swiper.css"
const Reviews = () => {
    return ( 
        <section className="reviews">
            <h3>Отзывы</h3>
            <SwiperReview/>
        </section>
    );
}
 
export default Reviews;