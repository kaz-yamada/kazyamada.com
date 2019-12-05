/* eslint-disable react/no-unescaped-entities */
import React, { Component } from "react";
import Helmet from "react-helmet";
import { graphql, Link } from "gatsby";
import SVG from "react-inlinesvg";

import Layout from "../layout";
import PostListing from "../components/PostListing";
import ProjectListing from "../components/ProjectListing";
import SEO from "../components/SEO";
import UserLinks from "../components/UserLinks";

import config from "../../data/SiteConfig";
import projects from "../../data/projects";

import kaz from "../assets/images/kaz.jpg";
import scroll from "../assets/images/scroll.svg";

class Index extends Component {
  render() {
    const { data } = this.props;
    const postEdges = data.allMarkdownRemark.edges;

    return (
      <Layout>
        <div className="front-page">
          <Helmet title={config.siteTitle} />
          <SEO postEdges={postEdges} />
          <div className="index-container">
            <div className="hero full-height">
              <div className="hero-text">
                <h2>Hi I'm Kazuki</h2>
                <p>I am a developer/programmer based in Sydney, Australia.</p>
                <UserLinks config={config} />
              </div>
              <div className="scroll-down">
                <Link to="/#about-me">
                  <SVG src={scroll} />
                </Link>
              </div>
            </div>
            <div className="front-page-contents">
              <section
                id="about-me"
                className="row"
                style={{ paddingTop: "4em" }}
              >
                <div className="medium side-gutter">
                  <div className="home-picture">
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
                <div className="medium-6 side-gutter">
                  <h1>About Me</h1>
                  <p>
                    For 2011-2015 I attended the University of Western Sydney
                    studying a Bachelor's Degree in Information Technology,
                    earning high distinctions in Programing fundamentals,
                    Database Design and Development, Programming Techniques,
                    Technologies for Web applications, Fundamentals of
                    Mathematics, Design Science. Worked part time as a clerk
                    druing that time. Left UWS to enrol in University of
                    Technology, Sydney in 2016.
                  </p>
                </div>
              </section>
              <section className="vertical-margin">
                <div className="section-title">
                  <h1>
                    Latest posts
                    <Link to="/blog/">View All</Link>
                  </h1>
                </div>
                <div className="small-12">
                  <PostListing postEdges={postEdges} />
                </div>
              </section>
              <section id="projects" className="vertical-margin">
                <div className="section-title">
                  <h1>
                    Projects
                    <a href="https://github.com/kaz-yamada">View All</a>
                  </h1>
                </div>
                <ProjectListing projects={projects} />
              </section>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

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
