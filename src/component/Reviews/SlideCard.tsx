import React from "react";

const SlideCard = (props) => {
    return ( 
        <div className="review_slide-card">
            <img className="review_slide-img" src={props.img} alt="" />
            <div className="review_slide-desc">
                <h4 className="review_slide-name">{props.name}</h4>
                <p className="review_slide-text">
                    “<span>{props.text}</span>”
                </p>
            </div>
        </div>
    );
}
 
export default SlideCard;