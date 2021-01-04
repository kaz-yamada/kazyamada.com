/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Helmet from "react-helmet";
import { graphql, Link } from "gatsby";

import Layout from "../layout";
import PostListing from "../components/PostListing";
import ProjectListing from "../components/ProjectListing";
import SEO from "../components/SEO";

import config from "../../data/SiteConfig";
import projects from "../../data/projects";

import kaz from "../../content/images/kaz.jpg";

const Index = ({ data }) => {
  const { edges: postEdges } = data.allMarkdownRemark;

  return (
    <Layout>
      <div className="front-page">
        <Helmet title={config.siteTitle} />
        <SEO postEdges={postEdges} />
        <div className="index-container">
          <div className="front-page-contents">
            <section id="about-me" className="blurb">
              <div className="row vertical-gutter side-gutter">
                <div className="medium-6">
                  <div className="blurb-picture">
                    <img
                      src={kaz}
                      style={{ width: 200 }}
                      alt="this is me and my uncle's cat"
                    />
                    <h5>
                      This is me (foreground) and my uncle's cat (background)
                    </h5>
                  </div>
                </div>
                <div className="medium-6 blurb-text">
                  <div>
                    <h1>Hi I'm Kazuki</h1>
                    <h2>
                      I'm a front end developer and a university graduate living
                      in Sydney, Australia.
                    </h2>
                    <div className="button-list">
                      <a
                        href="https://github.com/kaz-yamada"
                        className="button"
                      >
                        My Github
                      </a>
                      <Link className="button" to="/about/">
                        About Me
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section id="projects" className="vertical-margin side-gutter">
              <h1>My Personal Projects</h1>
              <ProjectListing projects={projects} />
            </section>
            <section className="vertical-margin side-gutter">
              <div className="section-title">
                <h1>
                  Latest posts
                  <Link className="button" to="/blog/">
                    View All
                  </Link>
                </h1>
              </div>
              <div className="small-12">
                <PostListing postEdges={postEdges} />
              </div>
            </section>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Index;

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      limit: 5
      sort: { fields: [fields___date], order: DESC }
      filter: { frontmatter: { template: { eq: "post" } } }
    ) {
      edges {
        node {
          fields {
            slug
            date
          }
          excerpt
          timeToRead
          frontmatter {
            title
            tags
            date
            featuredImage {
              childImageSharp {
                fixed(width: 150, height: 150) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
        }
      }
    }
  }
`;
