import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import PreviewCompatibleImage from './PreviewCompatibleImage'
// import Moment from 'react-moment'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'

class BlogRoll extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      // <div className="columns is-multiline">
      <div>
        <div className="is-12" style={{ textAlign: 'center', fontSize: '24px', color: '#ff4400' }}>
          <b>Recently Launched</b>
        </div>
        {posts &&
          posts.map(({ node: post }) => (
            <div className="is-parent column is-12" key={post.id}>
              <article
                className={`blog-list-item tile is-child box notification is-featured`}
                style={{ padding: '48px' }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <p style={{ letterSpacing: '3px', textTransform: 'uppercase', color: '#949495', fontSize: '13px', fontWeight: '700', fontFamily: 'Gothic A1,-apple-system,BlinkMacSystemFont,Helvetica Neue,Arial,sans-serif' }}>{post.frontmatter.tags}</p>
                  {post.frontmatter.externalurl && post.frontmatter.externalurl !== "" &&
                    <Link to={post.frontmatter.externalurl} target="_blank">
                      <FontAwesomeIcon size="sm" icon={faExternalLinkAlt} />
                    </Link>}
                </div>
                <div className="columns" style={{ marginTop: '3px' }}>
                  {post.frontmatter.featuredimage &&
                    <div className="column is-3">
                      <Link><PreviewCompatibleImage
                        imageStyle={{ borderRadius: '4px' }}
                        imageInfo={{
                          image: post.frontmatter.featuredimage,
                          alt: `featured image thumbnail for post ${post.frontmatter.title}`,
                        }}
                      /></Link>
                    </div>}
                  <div className="column is-9" style={{ display: 'flex', alignItems: 'center' }}>
                    <Link to={post.fields.slug}><p style={{ color: '#fff', textAlign: 'justify', fontSize: '20px', fontWeight: '500', fontFamily: 'Gothic A1,-apple-system,BlinkMacSystemFont,Helvetica Neue,Arial,sans-serif' }}>{post.frontmatter.title}</p></Link>
                  </div>
                </div>
                <p style={{ marginTop: '8px', textAlign: 'justify', fontSize: '17px', color: '#949495' }}>{post.frontmatter.description}</p>
                <div style={{ display: 'flex', alignItems: 'center', marginTop: '16px', color: '#949495' }}>
                  <FontAwesomeIcon icon={faThumbsUp} style={{ marginRight: '5px', fontSize: '10px' }} />
                  <p style={{ fontSize: '12px' }}>3,771</p>
                </div>
              </article>
            </div>
          ))
        }
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

export default () => (
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
                flipkarturl
                tags
                templateKey
                date(formatString: "MMMM DD, YYYY")
                featuredpost
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
    render={(data, count) => <BlogRoll data={data} count={count} />}
  />
)