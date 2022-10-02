import React from "react";

function Contact() {
  return (
    <div className="contact">
      <div className="container`">
        <div className="row align-items-center my-5">
          <div className="col-lg-7">
            <img
              className="img-fluid rounded mb-4 mb-lg-0"
              src="http://placehold.it/900x400"
              alt=""
            />
          </div>
        </div>
      </div>

      <div className="page">
        <span className="big-circle"></span>
        <img src="C:\Users\sbrad\Desktop\shape.png" className="square" alt="" />
        <div className="form">
          <div className="contact-info">
            <h3 className="title">Let's get in touch</h3>
            <p className="text">
              To know more about cryptocurrency and to solve any query please feel free to contact us!
            </p>

            <div className="info">
              <div className="information">
                <img src="https://icon2.cleanpng.com/20180328/gzq/kisspng-computer-icons-computer-software-location-icon-5abbd600aa85b6.1407853215222594566985.jpg" className="icon" alt="" />
                <p> Gomti Nagar, New Delhi</p>
              </div>
              <div className="information">
                <img src="https://i.pinimg.com/originals/8f/c3/7b/8fc37b74b608a622588fbaa361485f32.png" className="icon" alt="" />
                <a href="mailto:tusharagrawal.qrp@gmail.com"> tusharagrawal.qrp@gmail.com </a>
              </div>
              <div className="information">
                <img src="https://w7.pngwing.com/pngs/129/394/png-transparent-green-phone-icon-iphone-3g-telephone-call-computer-icons-phone-icon-miscellaneous-text-grass-thumbnail.png" className="icon" alt="" />
                <p>(+91) 1234567897</p>
              </div>
              

            </div>
          </div>


          <div className="contact-form">
            <span className="circle one"></span>
            <span className="circle two"></span>

            <form action="index.html" autocomplete="off">
              <h3 className="title">Contact us</h3>
              <div className="input-page focus">
                <input type="text" name="name" className="input" />
                <label for="">Username</label>
                <span>Username</span>
              </div>
              <div className="input-page focus">
                <input type="email" name="email" className="input" />
                <label for="">Email</label>
                <span>Email</span>
              </div>
              <div className="input-page focus">
                <input type="tel" name="phone" className="input" />
                <label for="">Phone</label>
                <span>Phone</span>
              </div>
              <div className="input-page textarea focus">
                <textarea name="message" className="input"></textarea>
                <label for="">Message</label>
                <span>Message</span>
              </div>
              <input type="submit" value="Send" className="btn" />
            </form>
          </div>
        </div>
      </div><script src="app.js"></script></div>
  );
}

export default Contact;
