import React from "react";
import { Link } from "gatsby";
import Img from "gatsby-image";

import { formattedDate } from "../utils/functions";

class PostListing extends React.Component {
  getPostList = () => {
    const postList = [];
    const { postEdges } = this.props;

    postEdges.forEach(postEdge => {
      postList.push({
        path: postEdge.node.fields.slug,
        tags: postEdge.node.frontmatter.tags,
        thumbnail: postEdge.node.frontmatter.featuredImage,
        title: postEdge.node.frontmatter.title,
        date: postEdge.node.fields.date,
        excerpt: postEdge.node.excerpt,
        timeToRead: postEdge.node.timeToRead
      });
    });
    return postList;
  };

  render() {
    const postList = this.getPostList();

    return (
      <div className="post-list">
        {postList.map(post => {
          let thumbnail;

          if (post.thumbnail) {
            thumbnail = post.thumbnail.childImageSharp.fixed;
          }

          return (
            <Link to={post.path} key={post.title} className="post-link">
              <div className="post-item">
                {thumbnail ? (
                  <Img fixed={thumbnail} className="thumbnail" />
                ) : (
                  <div />
                )}
                <div className="post-text">
                  <h3>{post.title}</h3>
                  <span>{formattedDate(post.date)}</span>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    );
  }
}

export default PostListing;
