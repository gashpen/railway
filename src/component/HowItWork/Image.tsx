import React from "react";

const Image = (props) => {
    return ( 
        <div className="howitwork_img">
            <img src={props.img} alt="" />
            <span>{props.span}</span>
        </div>
    );
}
 
export default Image;