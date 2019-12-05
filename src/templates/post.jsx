import React, { Component } from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
// import BackgroundImage from "gatsby-background-image";

import Layout from "../layout";
import UserInfo from "../components/UserInfo";
import PostTags from "../components/PostTags";
import SEO from "../components/SEO";
import config from "../../data/SiteConfig";
import { formattedDate } from "../utils/functions";

export default class PostTemplate extends Component {
  getThumbnail = post => {
    let image = "";

    // if (post.cover) image = post.cover;

    if (post.featuredImage) {
      image = post.featuredImage.childImageSharp.fluid;
    }

    return image;
  };

  render() {
    const { data, pageContext } = this.props;
    const { slug } = pageContext;
    const postNode = data.markdownRemark;
    const post = postNode.frontmatter;
    const date = formattedDate(post.date);
    // const image = this.getThumbnail(post);

    if (!post.id) {
      post.id = slug;
    }
    if (!post.category_id) {
      post.category_id = config.postDefaultCategoryID;
    }

    return (
      <Layout>
        <div className="post template-post">
          <Helmet>
            <title>{`${post.title} | ${config.siteTitle}`}</title>
          </Helmet>
          <SEO postPath={slug} postNode={postNode} postSEO />
          <div className="post-header">
            <div className="thumbbail-container">
              {/* <BackgroundImage className="" fluid={image} /> */}
            </div>
            <div className="title">
              <h1>{post.title}</h1>
            </div>
            <div className="post-date">
              <h3>{date}</h3>
            </div>
          </div>
          <div className="post-body">
            <div dangerouslySetInnerHTML={{ __html: postNode.html }} />
            <UserInfo config={config} />
          </div>
          <div className="post-meta">
            {post.tags && (
              <div className="post-tags">
                <span className="label">Tags: </span>
                <PostTags tags={post.tags} />
              </div>
            )}
          </div>
        </div>
      </Layout>
    );
  }
}

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      timeToRead
      excerpt
      frontmatter {
        title
        date
        category
        tags
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 1200) {
              ...GatsbyImageSharpFluid_noBase64
            }
          }
        }
      }
      fields {
        slug
        date
      }
    }
  }
`;
