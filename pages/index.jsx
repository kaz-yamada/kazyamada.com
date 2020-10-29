/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Helmet from "react-helmet";
import { graphql, Link } from "gatsby";
import GitHubButton from "react-github-btn";

import Layout from "../layout";
import PostListing from "../components/PostListing";
import ProjectListing from "../components/ProjectListing";
import SEO from "../components/SEO"; 

import config from "../../data/SiteConfig";
import projects from "../../data/projects";

import kaz from "../../content/images/kaz.jpg";

const Index = ({ data }) => {
  const postEdges = data.allMarkdownRemark.edges;

  return (
    <Layout>
      <div className="front-page">
        <Helmet title={config.siteTitle} />
        <SEO postEdges={postEdges} />
        <div className="index-container">
          <div className="front-page-contents">
            <section id="about-me">
              <div className="row vertical-gutter">
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
                    <GitHubButton
                      href="https://github.com/kaz-yamada"
                      data-size="large"
                      className="home-github-button"
                    >
                      kaz-yamada
                    </GitHubButton>
                  </div> 
                </div>
                <div className="medium-6 side-gutter">
                  <div>
                    <h2>Hi I'm Kazuki</h2>
                    <p>
                      I am a developer/programmer based in Sydney, Australia.
                    </p>
                  </div>
                  <h1>About Me</h1>
                  <p>
                    For 2011-2015 I attended the University of Western Sydney
                    studying a Bachelor's Degree in Information Technology,
                    earning high distinctions in Programing fundamentals,
                    Database Design and Development, Programming Techniques,
                    Technologies for Web applications, Fundamentals of
                    Mathematics, Design Science. Worked part time as a clerk
                    druing that time. Left UWS to enrol in University of
                    Technology, Sydney in 2016 and graduated 2019.
                  </p>
                </div>
              </div>
              <div className="row vertical-gutter">
                <div className="medium-12">
                  <h2>My skills</h2>
                  <p>
                    In addition to the programming languages that were part of
                    my courses I've been learning on my own using the vast (and
                    mostly free) resources available on the internet. I've
                    compiled a list of what I've <a href="/learn">Learned</a>{" "}
                    over the years but most of my strength is in front-end
                    development, but select skills include:
                  </p>
                </div>
                <div className="medium-12 learn-list">
                  <ul>
                    <li>HTML5</li>
                    <li>CSS3</li>
                    <li>React</li>
                    <li>Javascript/ES6</li>
                    <li>Android (Java)</li>
                    <li>Git</li>
                  </ul>
                </div>
              </div>
            </section>
            <section className="vertical-margin side-gutter">
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