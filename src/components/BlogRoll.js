import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import PreviewCompatibleImage from './PreviewCompatibleImage'
// import Moment from 'react-moment'

class BlogRoll extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    let isColClass = "is-4";
    if (typeof window !== 'undefined') {
      let location = window.location;
      if (location.pathname.indexOf("/blog") >= 0) {
        isColClass = "is-3";
      }
    }

    return (
      <div className="columns is-multiline">
        {posts &&
          posts.map(({ node: post }) => (
            <div className={`is-parent column ${isColClass}`} key={post.id}>
              {post.frontmatter.featuredimage ? (
                <Link to={post.fields.slug} className="featured-thumbnail">
                  <PreviewCompatibleImage
                    imageStyle={{ borderRadius: '5px 5px 0px 0px' }}
                    imageInfo={{
                      image: post.frontmatter.featuredimage,
                      alt: `featured image thumbnail for post ${post.frontmatter.title}`,
                    }}
                  />
                </Link>
              ) : null}
              <article
                className={`blog-list-item tile is-child box notification ${
                  post.frontmatter.featuredpost ? 'is-featured' : ''
                  }`}
              >
                <header>
                  <p className="post-meta">
                    <Link
                      className="title has-text-primary is-size-5"
                      to={post.fields.slug}
                    >
                      {post.frontmatter.title}
                    </Link>
                    <div style={{ marginTop: 3 }}>
                      <span className="subtitle is-block" style={{ fontSize: 16 }}>
                        <span> &bull; </span>
                        {post.frontmatter.date}
                        {/* <Moment fromNow ago>{post.frontmatter.date}</Moment> ago */}
                      </span>
                    </div>
                  </p>
                </header>
                <p>
                  {post.excerpt}
                  <br />
                  <br />
                  <Link className="button" to={post.fields.slug}>
                    Keep Reading →
                  </Link>
                </p>
              </article>
            </div>
          ))
        }
      </div>
    )
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
              excerpt(pruneLength: 150)
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