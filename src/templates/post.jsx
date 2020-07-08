import React, { Component } from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Img from "gatsby-image";

import Layout from "../layout";
import UserInfo from "../components/UserInfo";
import PostTags from "../components/PostTags";
import SEO from "../components/SEO";
import config from "../../data/SiteConfig";
import { formattedDate } from "../utils/functions";

export default class PostTemplate extends Component {
  getThumbnail = (post) => {
    const { featuredImage } = post;

    if (featuredImage) {
      return featuredImage.childImageSharp.fixed;
    }

    return "";
  };

  render() {
    const { data, pageContext } = this.props;
    const { markdownRemark: postNode } = data;
    const { frontmatter: post } = postNode;
    const { slug } = pageContext;

    const { imageCredit } = post;

    const date = formattedDate(post.date);
    const image = this.getThumbnail(post);

    if (!post.id) post.id = slug;

    if (!post.category_id) {
      post.category_id = config.postDefaultCategoryID;
    }

    return (
      <Layout>
        <div className="post template-post side-gutter">
          <Helmet>
            <title>{`${post.title} | ${config.siteTitle}`}</title>
          </Helmet>
          <SEO postPath={slug} postNode={postNode} postSEO />
          <div className="post-header">
            <div className="header-background" />
            <div className="header-contents">
              {image ? <Img fixed={image} className="thumbnail" /> : <div />}
              <div className="title-bar">
                <div className="title">
                  <h1>{post.title}</h1>
                </div>
                <div className="post-date">
                  <h3>{date}</h3>
                </div>
              </div>
            </div>
          </div>
          <div className="post-meta vertical-gutter">
            {imageCredit && <div className="image-credit">{imageCredit}</div>}
            {post.tags && (
              <div className="post-tags">
                <span className="label">Tags: </span>
                <PostTags tags={post.tags} />
              </div>
            )}
          </div>
          <div className="post-body">
            <div dangerouslySetInnerHTML={{ __html: postNode.html }} />
            <UserInfo config={config} />
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
        imageCredit
        featuredImage {
          childImageSharp {
            fixed(width: 150, height: 150) {
              ...GatsbyImageSharpFixed
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
