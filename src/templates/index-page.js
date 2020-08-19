import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'

import Layout from '../components/Layout'
import Features from '../components/Features'
import BlogRoll from '../components/BlogRoll'
import Typed from 'react-typed'
import Footer from '../components/Footer'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Testimonials from '../components/Testimonials'

export const IndexPageTemplate = ({
  image,
  title,
  heading,
  subheading,
  mainpitch,
  description,
  intro,
}) => (
    <div>
      <div
        className="full-width-image margin-top-0"
        style={{
          backgroundImage: `url(${
            !!image.childImageSharp ? image.childImageSharp.fluid.src : image
            })`,
          backgroundPosition: `top left`,
          backgroundAttachment: `fixed`,
        }}
      >
        <div
          style={{
            display: 'flex',
            height: '150px',
            lineHeight: '1',
            justifyContent: 'space-around',
            alignItems: 'left',
            flexDirection: 'column',
          }}
        >
          <h1
            className="has-text-weight-bold is-size-3-mobile is-size-2-tablet is-size-1-widescreen"
            style={{
              boxShadow:
                '#1f73b7 0.5rem 0px 0px, #1f73b7 -0.5rem 0px 0px',
              backgroundColor: '#1f73b7',
              color: 'white',
              lineHeight: '1',
              padding: '0.25em',
            }}
          >
            {title}
          </h1>
          <h3
            className="has-text-weight-bold is-size-5-mobile is-size-5-tablet is-size-4-widescreen"
            style={{
              boxShadow:
                'rgb(255, 68, 0) 0.5rem 0px 0px, rgb(255, 68, 0) -0.5rem 0px 0px',
              backgroundColor: 'rgb(255, 68, 0)',
              color: 'white',
              lineHeight: '1',
              padding: '0.25em',
            }}
          >
            {subheading}
          </h3>
        </div>
      </div>
      <section className="section section--gradient">
        <div className="container">
          <div className="section">
            <div className="columns">
              <div className="column is-10 is-offset-1">
                <div className="content">
                  <div className="content">
                    <div className="tile">
                      <h1 className="title">{mainpitch.title}</h1>
                    </div>
                    <div className="tile">
                      <h3 className="subtitle">{mainpitch.description}</h3>
                    </div>
                  </div>
                  <br />
                  <div className="columns">
                    <div className="column is-12">
                      <h3 className="has-text-weight-semibold is-size-2">
                        {heading}
                      </h3>
                      <p className="subtitle">{description}</p>
                    </div>
                  </div>
                  <Features gridItems={intro.blurbs} />
                  <div className="columns">
                    <div className="column is-12 has-text-centered">
                      <Link className="btn" to="/products">
                        See all categories
                    </Link>
                    </div>
                  </div>
                  <div className="column is-12">
                    <h3 className="has-text-weight-semibold is-size-2">
                      Latest stories
                    </h3>
                    <BlogRoll />
                    <div className="column is-12 has-text-centered">
                      <Link className="btn" to="/blog">
                        Read more
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
}

// const IndexPage = ({ data }) => {
//   const { frontmatter } = data.markdownRemark

//   return (
//     <Layout>
//       <IndexPageTemplate
//         image={frontmatter.image}
//         title={frontmatter.title}
//         heading={frontmatter.heading}
//         subheading={frontmatter.subheading}
//         mainpitch={frontmatter.mainpitch}
//         description={frontmatter.description}
//         intro={frontmatter.intro}
//       />
//     </Layout>
//   )
// }

// IndexPage.propTypes = {
//   data: PropTypes.shape({
//     markdownRemark: PropTypes.shape({
//       frontmatter: PropTypes.object,
//     }),
//   }),
// }

// export default IndexPage

const IndexPage = class extends React.Component {
  constructor(props) {
    super(props);
    // alert(JSON.stringify(props));
  }

  getTypeWriter() {
    return (
      <div className="has-text-weight-bold">
        <label>Shall I buy </label>
        <span>
          <Typed
            strings={['iphone XR or OnePlus 8?', 'Macbook Air or Macbook Pro?', 'Audi A4 or Jaguar XE?', 'Yamaha S775 or Korg PA700?', 'Nikon D5600 or Canon 200D?']}
            typeSpeed={150}
            backSpeed={50}
            loop
          />
        </span>
      </div>
    )
  }

  getTestimonials() {
    const testimonials = this.props.data.markdownRemark.frontmatter.testimonials;


    var settings = {
      dots: false,
      autoplay: true,
      infinite: true,
      arrows: false,
      autoplaySpeed: 10000,
      speed: 2000,
      slidesToShow: 1,
      slidesToScroll: 1
    };

    let testimonial =
      <div className="cd-testimonials-wrapper cd-container">
        <Slider {...settings}>
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
        </Slider>

        {/* <Testimonials testimonials={testimonials} /> */}
      </div>

    // let testimonial =
    //   <div className="cd-testimonials-wrapper cd-container">
    //     <ul className="cd-testimonials">
    //       <li>
    //         <p>Vyber did a thorough research in helping me buy the best portable camera with picture quality equivallent to DSLRs.</p>
    //         <div className="cd-author">
    //           <ul className="cd-author-info">
    //             <li>Hemali Patel</li>
    //             <li>Dental Surgeon</li>
    //           </ul>
    //         </div>
    //       </li>
    //     </ul>
    //     <ul className="cd-testimonials">
    //       <li>
    //         <p>Vyber was very quick in letting me know which smartwatch to buy as per my needs! I think it was the best purchase I made.</p>
    //         <div className="cd-author">
    //           <ul className="cd-author-info">
    //             <li>Dipali Ladani</li>
    //             <li>Physiotherapist, Anatomist</li>
    //           </ul>
    //         </div>
    //       </li>
    //     </ul>
    //   </div>;

    return testimonial;
  }

  render() {
    return (
      <Layout>
        <section className="section">
          <div className="container">
            <div className="columns">
              <div className="column is-6">
                <div style={{ position: 'sticky', top: 100 }}>
                  <div style={{ fontWeight: 200, color: '#888', fontSize: '2rem' }}>
                    Chat with us now!
                  </div>

                  <div style={{ minHeight: '100px', fontSize: '1.5em', fontWeight: 200, fontFamily: "'Raleway', sans-serif" }}>
                    {this.getTypeWriter()}
                  </div>

                  {/* <div style={{ color: '#949495', textAlign: 'justify', lineHeight: 1.5, textJustify: 'inter-word', fontWeight: 100, fontSize: '20px', maxWidth: '90%', fontFamily: 'Gothic A1,-apple-system,BlinkMacSystemFont,Helvetica Neue,Arial,sans-serif' }}>
                    With several product alternatives out there in the market, it's really difficult to buy the right one that best suits your needs. Click the Chat button below and get help from&nbsp;
                    <a href="https://vuejs.org/" rel="noopener" style={{ color: '#d95525' }}>our experts</a>&nbsp;
                    in choosing the best.
                  </div> */}

                  {/* <p style={{ marginTop: '8px', fontSize: '17px', color: '#b0b0b0', textAlign: 'justify' }}>
                    With several product alternatives out there in the market, it's really difficult to buy the right one that best suits your needs. Click the Chat button below and get help from&nbsp;
                    <Link to="/" style={{ color: '#e85a27' }}>our experts</Link>&nbsp;
                    in choosing the best.
                  </p> */}

                  {this.getTestimonials()}

                  {/* <Footer /> */}
                </div>
              </div>
              <div className="column is-6 ">
                {/* Right Side */}
                <BlogRoll />
                <div style={{ marginTop: '50px' }}></div>
                {/* <VlogRoll /> */}
              </div>

              {/* <div>
              <div className="column is-12">
                <h3 className="has-text-weight-semibold is-size-2">
                  Latest stories
                    </h3>
                <BlogRoll />
                <div className="column is-12 has-text-centered">
                  <Link className="btn" to="/blog">
                    Read more
                  </Link>
                </div>
              </div>
            </div> */}
            </div>
          </div>
        </section>
      </Layout >
    )
  }
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        testimonials {
          author
          quote
        }
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        subheading
        mainpitch {
          title
          description
        }
        description
        intro {
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            text
          }
          heading
          description
        }
      }
    }
  }  
`
