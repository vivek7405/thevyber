import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import PreviewCompatibleImage from './PreviewCompatibleImage'
// import Moment from 'react-moment'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faYoutube, faAmazon } from '@fortawesome/free-brands-svg-icons'

class VlogRoll extends React.Component {
    render() {
        const { data } = this.props
        const { edges: posts } = data.allMarkdownRemark

        return (
            <div>
                <div className="is-12" style={{ textAlign: 'center', fontSize: '24px', color: '#ff4400' }}>
                    <b>Product Reviews</b>
                </div>
                <div className="columns is-multiline" style={{ paddingTop: '0.75rem' }}>
                    {posts &&
                        posts.map(({ node: post }) => (
                            <div className="is-parent column is-6" key={post.id}>
                                <article
                                    className={`blog-list-item tile is-child box notification is-featured`}
                                    style={{ padding: '24px' }}
                                >
                                    <div style={{ display: 'flex', justifyContent: 'space-between', color: '#949495' }}>
                                        <p style={{ letterSpacing: '3px', textTransform: 'uppercase', fontSize: '13px', fontWeight: '700', fontFamily: 'Gothic A1,-apple-system,BlinkMacSystemFont,Helvetica Neue,Arial,sans-serif' }}>{post.frontmatter.tags}</p>
                                        {/* {post.frontmatter.externalurl &&
                                            <Link to={post.frontmatter.externalurl} target="_blank">
                                                <FontAwesomeIcon size="sm" icon={faExternalLinkAlt} />
                                            </Link>} */}
                                    </div>
                                    <div style={{ marginTop: '10px' }}>
                                        {post.frontmatter.youtubeurl &&
                                            <iframe style={{ borderRadius: '5px' }} width="100%"
                                                frameBorder="none"
                                                src="https://www.youtube.com/embed/J0PtGdp-Cgs?origin=https://plyr.io&amp;iv_load_policy=3&amp;modestbranding=1&amp;playsinline=1&amp;showinfo=0&amp;rel=0&amp;enablejsapi=1"
                                                allowFullScreen>
                                            </iframe>
                                        }
                                        <div style={{ marginTop: '5px' }}>
                                            <Link style={{ textDecoration: 'none' }} to={post.fields.slug}>
                                                <p style={{ color: '#fff', textAlign: 'justify', fontSize: '20px', fontWeight: '500', fontFamily: 'Gothic A1,-apple-system,BlinkMacSystemFont,Helvetica Neue,Arial,sans-serif' }}>
                                                    {post.frontmatter.title}
                                                </p>
                                            </Link>
                                        </div>
                                    </div>
                                    {/* <p style={{ marginTop: '8px', textAlign: 'justify', fontSize: '17px', color: '#949495' }}>{post.frontmatter.description}</p> */}
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '16px', color: '#949495' }}>
                                        <div style={{ display: 'flex', alignItems: 'center' }}>
                                            <FontAwesomeIcon icon={faThumbsUp} style={{ marginRight: '5px', fontSize: '10px' }} />
                                            <p style={{ fontSize: '12px' }}>3,771</p>
                                        </div>
                                        <div>
                                            {/* {post.frontmatter.facebookurl && <Link to={post.frontmatter.facebookurl} target="_blank">
                                                <FontAwesomeIcon icon={faFacebook} />
                                            </Link>}
                                            {post.frontmatter.youtubeurl && <Link style={{ paddingLeft: '10px' }} to={post.frontmatter.youtubeurl} target="_blank">
                                                <FontAwesomeIcon icon={faYoutube} />
                                            </Link>} */}
                                        </div>
                                    </div>
                                </article>
                            </div>
                        ))
                    }
                </div>
            </div>
        )

        // let isColClass = "is-4";
        // if (typeof window !== 'undefined') {
        //   let location = window.location;
        //   if (location.pathname.indexOf("/vlog") >= 0) {
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

VlogRoll.propTypes = {
    data: PropTypes.shape({
        allMarkdownRemark: PropTypes.shape({
            edges: PropTypes.array,
        }),
    }),
}

export default () => (
    <StaticQuery
        query={graphql`
      query VlogRollQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "vlog-post" } } }
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
                youtubeurl
                tags
                templateKey
                date(formatString: "MMMM DD, YYYY")
                featuredpost                
              }
            }
          }
        }
      }
    `}
        render={(data, count) => <VlogRoll data={data} count={count} />}
    />
)