import React from 'react'
import PropTypes from 'prop-types'
import { v4 } from 'uuid'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const settings = {
  dots: false,
  autoplay: true,
  infinite: true,
  arrows: false,
  autoplaySpeed: 8000,
  speed: 2000,
  slidesToShow: 1,
  slidesToScroll: 1
};

const Testimonials = ({ testimonials }) => (
  <div>
    {/* {testimonials.map((testimonial) => (
      <article key={v4()} className="message">
        <div className="message-body">
          {testimonial.quote}
          <br />
          <cite> – {testimonial.author}</cite>
        </div>
      </article>
    ))} */}
    <div className="cd-testimonials-wrapper cd-container">
      <Slider {...settings}>
        {testimonials?.map((testimonial) => (
          <ul className="cd-testimonials" key={v4()}>
            <li>
              <p>{testimonial.quote}</p>
              <div className="cd-author">
                <ul className="cd-author-info">
                  <li>- {testimonial.author}</li>
                </ul>
              </div>
            </li>
          </ul>
        ))}
      </Slider>
    </div>
  </div>
)

Testimonials.propTypes = {
  testimonials: PropTypes.arrayOf(
    PropTypes.shape({
      quote: PropTypes.string,
      author: PropTypes.string,
    })
  ),
}

export default Testimonials
