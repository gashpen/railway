import React from "react";
import "./howitwork.css"
import Image from "./Image";
import home from '../../assets/Group3(1).svg';
import computer from '../../assets/Group3.svg';
import network from '../../assets/Group4.svg';
const HowItWork = () => {
    return ( 
        <section className="howitwork">
            <div className="howitwork_head">
                <h3>КАК ЭТО РАБОТАЕТ</h3>
                <button className="btn howitwork_button">Узнать больше</button>
            </div>
            <div className="howitwork_icon-wrap">
                <Image
                    img={computer}
                    span={"Удобный заказ на сайте"}
                />
                 <Image
                    img={home}
                    span={"Нет необходимости ехать в офис"}
                />
                <Image
                    img={network}
                    span={"Огромный выбор направлений"}
                />
            </div>
        </section>
    );
}
 
export default HowItWork;