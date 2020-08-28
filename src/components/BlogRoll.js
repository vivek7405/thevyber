import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import { kebabCase } from 'lodash'

import PreviewCompatibleImage from './PreviewCompatibleImage'
// import Moment from 'react-moment'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExternalLinkAlt, faStar } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faYoutube, faAmazon, faEbay } from '@fortawesome/free-brands-svg-icons'

class BlogRoll extends React.Component {
  render() {
    const { data } = this.props
    const isFeatured = this.props.isFeatured
    const { edges: posts } = data.allMarkdownRemark

    return (
      // <div className="columns is-multiline">
      <div className="has-text-centered" style={{ marginTop: '0.75rem' }}>
        {/* <div className="is-12" style={{ textAlign: 'center', fontSize: '24px', color: '#ff4400' }}>
          <b>Recently Launched</b>
        </div> */}
        <div className="columns is-multiline">
          {posts &&
            posts.filter(({ node: post }) => isFeatured !== undefined ? post.frontmatter.featuredpost === isFeatured : post).map(({ node: post }) => (
              <div className={`is-parent column ${isFeatured !== undefined ? isFeatured === true ? 'is-12' : 'is-6' : 'is-3'}`} key={post.id}>
                <article
                  className={`blog-list-item tile is-child post-background`}
                  style={{ padding: '1rem' }}
                >
                  <div style={{ display: 'flex', alignContent: 'center', justifyContent: 'space-between', color: '#949495' }}>
                    <div style={{ display: 'flex', alignItems: 'center', letterSpacing: '3px', textTransform: 'uppercase', fontSize: '11px', fontWeight: '700', fontFamily: 'Gothic A1,-apple-system,BlinkMacSystemFont,Helvetica Neue,Arial,sans-serif' }}>
                      {post.frontmatter.tags &&
                        <Link style={{ textDecoration: 'none' }} to={`/tags/${kebabCase(post.frontmatter.tags[0])}/`}>
                          <p style={{ color: '#949495' }}>{post.frontmatter.tags[0]}</p>
                        </Link>}
                    </div>
                    <div>
                      {post.frontmatter.facebookurl && <a href={post.frontmatter.facebookurl} target="_blank" rel="noreferrer">
                        <FontAwesomeIcon icon={faFacebook} />
                      </a>}
                      {post.frontmatter.youtubeurl && <a style={{ paddingLeft: '10px' }} href={post.frontmatter.youtubeurl} target="_blank" rel="noreferrer">
                        <FontAwesomeIcon icon={faYoutube} />
                      </a>}
                      {post.frontmatter.externalurl && <a style={{ paddingLeft: '10px' }} href={post.frontmatter.externalurl} target="_blank" rel="noreferrer">
                        <FontAwesomeIcon icon={faExternalLinkAlt} />
                      </a>}
                    </div>
                  </div>
                  {/* <div className="columns" style={{ marginTop: '3px' }}>
                    {post.frontmatter.featuredimage &&
                      <div className="column is-4">
                        <Link to={post.fields.slug}>
                          <PreviewCompatibleImage
                            imageStyle={{ borderRadius: '4px' }}
                            imageInfo={{
                              image: post.frontmatter.featuredimage,
                              alt: `featured image thumbnail for post ${post.frontmatter.title}`,
                            }}
                          />
                        </Link>
                      </div>}
                    <div className="column is-8" style={{ display: 'flex', alignItems: 'center' }}>
                      <Link style={{ textDecoration: 'none' }} to={post.fields.slug}><p style={{ color: '#fff', textAlign: 'justify', fontSize: '13px', fontFamily: 'Gothic A1,-apple-system,BlinkMacSystemFont,Helvetica Neue,Arial,sans-serif' }}>{post.frontmatter.title}</p></Link>
                    </div>
                  </div> */}
                  <div className={isFeatured ? 'columns flex-center' : ''} style={{ marginBottom: 0 }}>
                    <div style={{ marginTop: '8px' }} className={isFeatured ? 'column is-4' : ''}>
                      {!post.frontmatter.isvideo && post.frontmatter.featuredimage &&
                        <Link to={post.fields.slug}>
                          <PreviewCompatibleImage
                            imageStyle={{ borderRadius: '5px' }}
                            imageInfo={{
                              image: post.frontmatter.featuredimage,
                              alt: `featured image thumbnail for post ${post.frontmatter.title}`,
                            }}
                          />
                        </Link>}
                      {post.frontmatter.isvideo &&
                        <iframe title={post.frontmatter.youtubevideoid} style={{ borderRadius: '5px' }} width="100%"
                          src={"https://www.youtube.com/embed/" + post.frontmatter.youtubevideoid}
                          frameBorder="0"
                          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen>
                        </iframe>}
                    </div>
                    <div style={{ marginTop: '8px' }} className={isFeatured ? 'column is-8' : ''}>
                      <Link style={{ textDecoration: 'none' }} to={post.fields.slug}>
                        <div>
                          <p style={{ color: '#fff', textAlign: 'justify', fontSize: '13px', fontFamily: 'Gothic A1,-apple-system,BlinkMacSystemFont,Helvetica Neue,Arial,sans-serif' }}>{post.frontmatter.title}</p>
                        </div>
                        <p style={{ marginTop: '8px', textAlign: 'justify', fontSize: '13px', color: '#949495' }}>{post.frontmatter.description}</p>
                      </Link>
                    </div>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '8px', color: '#949495' }}>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                      <FontAwesomeIcon icon={faStar} style={{ marginRight: '7px', fontSize: '14px' }} />
                      <p style={{ fontSize: '15px' }}>{post.frontmatter.rating}</p>
                    </div>
                    <div style={{ fontSize: '18px' }}>
                      {/* {post.frontmatter.facebookurl && <a href={post.frontmatter.facebookurl} target="_blank" rel="noreferrer">
                        <FontAwesomeIcon icon={faFacebook} />
                      </a>}
                      {post.frontmatter.youtubeurl && <a style={{ paddingLeft: '10px' }} href={post.frontmatter.youtubeurl} target="_blank" rel="noreferrer">
                        <FontAwesomeIcon icon={faYoutube} />
                      </a>} */}
                      {post.frontmatter.ebayurl && <a href={post.frontmatter.ebayurl} target="_blank" rel="noreferrer">
                        <FontAwesomeIcon size="lg" icon={faEbay} />
                      </a>}
                      {post.frontmatter.amazonurl && <a style={{ paddingLeft: '10px' }} href={post.frontmatter.amazonurl} target="_blank" rel="noreferrer">
                        <FontAwesomeIcon size="lg" icon={faAmazon} />
                      </a>}
                    </div>
                  </div>
                </article>
              </div>
            ))
          }
        </div>
        {!isFeatured && <p style={{ marginTop: '8px', fontSize: '13px', color: '#949495' }}>An initiative by <b>The Vyber</b></p>}
      </div>
    )

    // let isColClass = "is-4";
    // if (typeof window !== 'undefined') {
    //   let location = window.location;
    //   if (location.pathname.indexOf("/blog") >= 0) {
    //     isColClass = "is-3";
    //   }
    // }
    // return (
    //   <div className="columns is-multiline">
    //     {posts &&
    //       posts.map(({ node: post }) => (
    //         <div className={`is-parent column ${isColClass}`} key={post.id}>
    //           {post.frontmatter.featuredimage ? (
    //             <Link to={post.fields.slug} className="featured-thumbnail">
    //               <PreviewCompatibleImage
    //                 imageStyle={{ borderRadius: '5px 5px 0px 0px' }}
    //                 imageInfo={{
    //                   image: post.frontmatter.featuredimage,
    //                   alt: `featured image thumbnail for post ${post.frontmatter.title}`,
    //                 }}
    //               />
    //             </Link>
    //           ) : null}
    //           <article
    //             className={`blog-list-item tile is-child box notification ${
    //               post.frontmatter.featuredpost ? 'is-featured' : ''
    //               }`}
    //           >
    //             <header>
    //               <p className="post-meta">
    //                 <Link
    //                   className="title has-text-primary is-size-5"
    //                   to={post.fields.slug}
    //                 >
    //                   {post.frontmatter.title}
    //                 </Link>
    //                 <div style={{ marginTop: 3 }}>
    //                   <span className="subtitle is-block" style={{ fontSize: 16 }}>
    //                     <span> &bull; </span>
    //                     {post.frontmatter.date}
    //                     {/* <Moment fromNow ago>{post.frontmatter.date}</Moment> ago */}
    //                   </span>
    //                 </div>
    //               </p>
    //             </header>
    //             <p>
    //               {post.excerpt}
    //               <br />
    //               <br />
    //               <Link className="button" to={post.fields.slug}>
    //                 Keep Reading →
    //               </Link>
    //             </p>
    //           </article>
    //         </div>
    //       ))
    //     }
    //   </div>
    // )
  }
}

BlogRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default ({ isFeatured }) => (
  <StaticQuery
    query={graphql`
      query BlogRollQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
        ) {
          edges {
            node {
              excerpt(pruneLength: 120)              
              id
              fields {
                slug
              }
              frontmatter {
                title
                description
                externalurl
                facebookurl
                youtubeurl
                amazonurl
                ebayurl
                rating
                tags
                templateKey
                date(formatString: "MMMM DD, YYYY")
                featuredpost
                isvideo
                youtubevideoid
                featuredimage {
                  childImageSharp {
                    fluid(maxWidth: 120, quality: 100) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <BlogRoll isFeatured={isFeatured} data={data} count={count} />}
  />
)