import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import PreviewCompatibleImage from './PreviewCompatibleImage'
// import Moment from 'react-moment'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

class BlogRoll extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      // <div className="columns is-multiline">
      <div>
        {posts &&
          posts.map(({ node: post }) => (
            <div className="is-parent column is-12" key={post.id}>
              <article
                className={`blog-list-item tile is-child box notification is-featured`}
                style={{ padding: '48px' }}
              >
                <p style={{ letterSpacing: '3px', textTransform: 'uppercase', color: '#ffffff', fontSize: '10px', fontWeight: '700', fontFamily: 'Gothic A1,-apple-system,BlinkMacSystemFont,Helvetica Neue,Arial,sans-serif' }}>JAVASCRIPT</p>
                <p style={{ color: '#fff', fontSize: '24px', fontWeight: '600', fontFamily: 'Gothic A1,-apple-system,BlinkMacSystemFont,Helvetica Neue,Arial,sans-serif', marginTop: '8px' }}>Dinero.js</p>
                <p style={{ marginTop: '8px', fontSize: '14px', color: '#949495' }}>An immutable JavaScript library to create, calculate and format money.</p>
                <div style={{ display: 'flex', alignItems: 'center', marginTop: '16px', color: '#949495' }}>
                  <FontAwesomeIcon icon={faStar} style={{ marginRight: '5px', fontSize: '10px' }} />
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
              excerpt(pruneLength: 50)
              id
              fields {
                slug
              }
              frontmatter {
                title
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