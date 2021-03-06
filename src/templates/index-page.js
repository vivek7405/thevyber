import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'

import Layout from '../components/Layout'
// import Features from '../components/Features'
import BlogRoll from '../components/BlogRoll'
import Typed from 'react-typed'
// import Footer from '../components/Footer'
// import Slider from 'react-slick'
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
                  {/* <Features gridItems={intro.blurbs} /> */}
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
  getTypeWriter() {
    return (
      <div className="has-text-weight-bold has-text-white-ter">
        <label htmlFor="questions">Shall I buy </label>
        <span id="questions">
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

  render() {
    return (
      <Layout>
        <section className="section">
          <div className="container">
            <div className="columns">
              <div className="column is-6 has-text-white-ter">
                <div style={{ position: 'sticky', top: 100 }}>
                  <h1 className="index-page-title">
                    Let's make your next big purchase
                  </h1>

                  <h2 className="index-page-subtitle">
                    Our experts analyze and pick the product that best suits your needs
                  </h2>

                  <br />

                  <h3 style={{ fontWeight: 200, fontSize: '1.3rem' }}>
                    Chat with us now!
                  </h3>

                  <div style={{ minHeight: '100px', fontSize: '1.5em', fontWeight: 200, fontFamily: "'Raleway', sans-serif" }}>
                    {this.getTypeWriter()}
                  </div>

                  <Testimonials testimonials={this.props.data.markdownRemark.frontmatter.testimonials} />

                  <div style={{ textAlign: 'center', fontSize: '24px', color: '#ff4400' }}>
                    <b>Featured</b>
                  </div>
                  <BlogRoll isFeatured={true} />
                  <div style={{ marginTop: '50px' }}></div>
                </div>
              </div>
              <div className="column is-6">
                <div style={{ textAlign: 'center', fontSize: '24px', color: '#ff4400' }}>
                  <b>Recently Launched</b>
                </div>
                <BlogRoll isFeatured={false} />
                <div style={{ marginTop: '50px' }}></div>
              </div>
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
      }
    }
  }  
`
