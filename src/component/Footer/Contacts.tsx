import React from "react";

const Contacts = () => {
    return ( 
        <div className="footer_contacts">
            <h4>Свяжитесь с нами</h4>
            <div className="contacts">
                <div className="contact contact_number">
                    8 (800) 000 00 00
                </div>
                <div className="contact contact_mail">
                    inbox@mail.ru
                </div> 
                <div className="contact contact_skype">
                    tu.train.tickets
                </div>
                <div className="contact contact_location">
                    г. Москва<br/>ул. Московская 27-35<br/> 555 555
                </div>
            </div>
        </div>
    );
}
 
export default Contacts;