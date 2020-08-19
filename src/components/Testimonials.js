import React from 'react'
import PropTypes from 'prop-types'
import { v4 } from 'uuid'

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
    {testimonials?.map((testimonial) => (
      <ul className="cd-testimonials">
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
