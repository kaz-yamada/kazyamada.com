import React from "react";
import { Link } from "gatsby";
import Img from "gatsby-image";

import { formattedDate } from "../utils/functions";

const PostListing = ({ postEdges }) => {
  return (
    <div className="post-list">
      {postEdges.map((postEdge) => {
        const { node } = postEdge;
        const { fields, frontmatter } = node;

        const { slug: path, date } = fields;
        const { title, featuredImage } = frontmatter;

        const image = featuredImage ? featuredImage.childImageSharp.fixed : "";

        return (
          <div key={title} className="post-item">
            <Link to={path} className="post-link">
              {image ? <Img fixed={image} className="thumbnail" /> : <div />}
              <div className="post-text">
                <h3>{title}</h3>
                <span>{formattedDate(date)}</span>
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default PostListing;
