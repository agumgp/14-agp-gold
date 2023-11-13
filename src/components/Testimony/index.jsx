import React, { Component } from "react";
import Slider from "react-slick";
import person1 from "../../assets/John_Dee.png"
import person2 from "../../assets/Melissa.png"
import star from "../../assets/Rate.png"
import "./style.css"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class SimpleSlider extends Component {
    render() {
      const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
      return (
        <div className="carousel-container" id="Testimonial">
          <h1 className="testimonial-title">Testimonial</h1>
            <p className="testimonial-review">Berbagai review positif dari para pelanggan kami</p>
          <Slider {...settings}>
            <div>
            <div className="carousel-card">
            <div className="card-img-1">
                <img src={person1} alt="John_Dee"/>
            </div>
            <div className="rating">
                <img src={star} alt="rate"/>
                <h1 className="testimony">“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod”</h1>
                <p className="testimonial-submiter-1">John Dee 32, Bromo</p>
            </div>
            </div>
            </div>
            <div>
            <div className="carousel-card-2">
            <div className="card-img-1">
                <img src={person2} alt="Melissa"/>
            </div>
            <div class="rating">
                <img src={star} alt="rate"/>
                <h1 class="testimony">“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod”</h1>
                <p class="testimonial-submiter-1">Melissa 29, Jonggol</p>
            </div>
        </div>
            </div>
          </Slider>
        </div>
      );
    }
  }