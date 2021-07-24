import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

import * as layoutStyles from '../components/layout.module.scss'
import * as blogStyles from './blog.module.scss'

import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faTwitter,
  faGithub,
  faLinkedinIn,
} from '@fortawesome/free-brands-svg-icons'

import ProfilePhoto from '../images/Fernando_Papaqui_profile_photo.jpg'
import javaScriptLogo from '../images/javascript.svg'
import gatsbyLogo from '../images/gatsby.svg'
import netlifyLogo from '../images/netlify.svg'
import wordPressLogo from '../images/wordpress.svg'

const iconLink = <FontAwesomeIcon icon={faExternalLinkAlt} />
const iconTwitter = <FontAwesomeIcon icon={faTwitter} />
const iconGithub = <FontAwesomeIcon icon={faGithub} />
const iconLinkedin = <FontAwesomeIcon icon={faLinkedinIn} />

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allWpPost {
        edges {
          node {
            title
            date(formatString: "DD.MM.YYYY")
            excerpt
            slug
            categories {
              nodes {
                name
              }
            }
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="Home" />
      <div className={blogStyles.headerHome}>
        <h2>Hola! I'm</h2>
        <h1>Fernando Papaqui</h1>
        <h3>I'm a WordPress developer from Mexico.</h3>
        <p>
          WordPress developer with more than 10 years of work experience. I have
          a deep interest in creating web apps, websites and ecommerce projects
          based on creative strategies and constant improvement of programming
          skills and design patterns.
        </p>

        <ul className={blogStyles.homeSocials}>
          <li>
            <a
              className={blogStyles.homeSocialsItem}
              href="https://www.linkedin.com/in/fernandopapaqui/"
              target="_blank"
              rel="noreferrer"
            >
              {iconLinkedin} LinkedIn
            </a>
          </li>

          <li>
            <a
              className={blogStyles.homeSocialsItem}
              href="https://github.com/papaqui/portfolio"
              target="_blank"
              rel="noreferrer"
            >
              {iconGithub} Github
            </a>
          </li>
          <li>
            <a
              className={blogStyles.homeSocialsItem}
              href="https://twitter.com/papaqui_dev"
              target="_blank"
              rel="noreferrer"
            >
              {iconTwitter} Twitter
            </a>
          </li>
        </ul>
      </div>

      <div className={blogStyles.projectsPosts}>
        <h2>Projects</h2>
        <ol className={blogStyles.projectsPostsList}>
          <li className={blogStyles.projectsPostItem}>
            <h3>
              <a
                href="https://www.papaqui.mx/"
                target="_blank"
                rel="noreferrer"
              >
                <span role="img" aria-label="guitar">
                  🎸
                </span>{' '}
                Artist Website
              </a>
            </h3>
            <p>
              Custom made WordPress template without using starters. Display of
              pages, categories and blog functionality.
            </p>
            <div>
              <ul className={blogStyles.projectsStack}>
                <li className={blogStyles.projectsStackItem}>
                  <span>WordPress</span>
                </li>
                <li className={blogStyles.projectsStackItem}>
                  <span>DepolyHq</span>
                </li>
                <li className={blogStyles.projectsStackItem}>
                  <span>PHP</span>
                </li>
              </ul>
            </div>
            <a href="https://www.papaqui.mx/" target="_blank" rel="noreferrer">
              {iconLink}
            </a>
          </li>
          <li className={blogStyles.projectsPostItem}>
            <h3>
              <Link to="/">
                <span role="img" aria-label="floppy">
                  💾
                </span>{' '}
                Personal Porfolio
              </Link>
            </h3>
            <p>
              Made with Gatsby, deployed with Netlify, using Contentful CMS with
              GraphQL and styles on SCSS.
            </p>
            <div>
              <ul className={blogStyles.projectsStack}>
                <li className={blogStyles.projectsStackItem}>
                  <span>Gatsby</span>
                </li>
                <li className={blogStyles.projectsStackItem}>
                  <span>WordPress</span>
                </li>
                <li className={blogStyles.projectsStackItem}>
                  <span>Netlify</span>
                </li>
                <li className={blogStyles.projectsStackItem}>
                  <span>GraphQL</span>
                </li>
              </ul>
            </div>
            <a
              href="https://github.com/papaqui/portfolio"
              target="_blank"
              rel="noreferrer"
            >
              {iconLink}
            </a>
          </li>
          <li className={blogStyles.projectsPostItem}>
            <h3>
              <a
                href="https://www.drpapaqui.com.mx/calculadora-de-frecuencia-cardiaca-maxima/"
                target="_blank"
                rel="noreferrer"
              >
                <span role="img" aria-label="heart">
                  ❤
                </span>{' '}
                Heart Rate Calculator
              </a>
            </h3>
            <p>
              Vanilla JS web app to calculate max and min heart rate for sports
              and proper training.
            </p>
            <div>
              <ul className={blogStyles.projectsStack}>
                <li className={blogStyles.projectsStackItem}>
                  <span>Javascript</span>
                </li>
                <li className={blogStyles.projectsStackItem}>
                  <span>WordPress</span>
                </li>
                <li className={blogStyles.projectsStackItem}>
                  <span>Bootstrap</span>
                </li>
              </ul>
            </div>
            <a
              href="https://www.drpapaqui.com.mx/calculadora-de-frecuencia-cardiaca-maxima/"
              target="_blank"
              rel="noreferrer"
            >
              {iconLink}
            </a>
          </li>
          <li className={blogStyles.projectsPostItem}>
            <h3>
              <Link to="/bmi">
                <span role="img" aria-label="estetoscopio">
                  🩺
                </span>{' '}
                Body Mass Index Calculator
              </Link>
            </h3>
            <p>
              Vanilla JS web app to calculate body mass index and get references
              to get a more balanced diet.
            </p>

            <div>
              <ul className={blogStyles.projectsStack}>
                <li className={blogStyles.projectsStackItem}>
                  <span>Javascript</span>
                </li>
                <li className={blogStyles.projectsStackItem}>
                  <span>WordPress</span>
                </li>
                <li className={blogStyles.projectsStackItem}>
                  <span>Bootstrap</span>
                </li>
              </ul>
            </div>

            <a
              href="https://www.drpapaqui.com.mx/calculadora-indice-de-masa-corporal/"
              target="_blank"
              rel="noreferrer"
            >
              {iconLink}
            </a>
          </li>
        </ol>

        <h2>Other projects</h2>
        <p>Projects I've built either to learn or to have fun.</p>
        <Link className={blogStyles.projectBtn} to="/work">
          Archive
        </Link>
      </div>

      <div className={blogStyles.blogPosts}>
        <h2>Blog posts</h2>
        <ol className={blogStyles.blogPostsList}>
          {data.allWpPost.edges.slice(0, 4).map(edge => (
            <li className={blogStyles.blogPostItem}>
              <p className={blogStyles.blogCategory}>
                {edge.node.categories.nodes.map(cat => (
                  <span className={blogStyles.tagCategory}>{cat.name}</span>
                ))}
              </p>
              <h3>{edge.node.title}</h3>
              <h4 className={blogStyles.blogPostDate}>{edge.node.date}</h4>
              <div
                className={blogStyles.blogExcerpt}
                dangerouslySetInnerHTML={{
                  __html: edge.node.excerpt.slice(0, 100) + ' [...]',
                }}
              />
              <Link
                className={blogStyles.blogLink}
                to={`/blog/${edge.node.slug}`}
              >
                Read more
              </Link>
            </li>
          ))}
        </ol>
        <div className={layoutStyles.btnContainer}>
          <Link to="/blog" className={layoutStyles.btn}>
            Read more posts
          </Link>
        </div>
      </div>

      <div className={blogStyles.contactHome}>
        <h2>Contact me</h2>
        <p>
          Let's connect and talk about tech, projects, nature, music or anything
          else.
        </p>
        <div className={blogStyles.profileHome}>
          <div className={blogStyles.profilePic}>
            <img src={ProfilePhoto} alt="Fernando Papaqui Profile" />
          </div>
          <div className={blogStyles.profileInfo}>
            <h3>Fernando Papaqui</h3>
            <a
              className={blogStyles.profileEmail}
              href="mailto:hola@rivaslevi.mx"
            >
              hola@rivaslevi.mx
            </a>
            <ul className={blogStyles.profileSocials}>
              <li>
                <a
                  className={blogStyles.homeSocialsItem}
                  href="https://www.linkedin.com/in/fernandopapaqui/"
                  target="_blank"
                  rel="noreferrer"
                >
                  {iconLinkedin} LinkedIn
                </a>
              </li>
              <li>
                <a
                  className={blogStyles.homeSocialsItem}
                  href="https://github.com/papaqui/portfolio"
                  target="_blank"
                  rel="noreferrer"
                >
                  {iconGithub} Github
                </a>
              </li>

              <li>
                <a
                  className={blogStyles.homeSocialsItem}
                  href="https://twitter.com/papaqui_dev"
                  target="_blank"
                  rel="noreferrer"
                >
                  {iconTwitter} Twitter
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className={blogStyles.madeWith}>
          <div>
            <p>Site made with</p>
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
              target="_blank"
              rel="noreferrer"
            >
              <img src={javaScriptLogo} alt="JavaScript" />
            </a>
            <a
              href="https://www.gatsbyjs.com/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={gatsbyLogo} alt="Gatsby.js" />
            </a>
          </div>

          <div>
            <p>Deployed with</p>
            <a href="https://www.netlify.com/" target="_blank" rel="noreferrer">
              <img src={netlifyLogo} alt="Netlify" />
            </a>
          </div>

          <div>
            <p>Headless CMS</p>
            <a href="http://wordpress.com/" target="_blank" rel="noreferrer">
              <img src={wordPressLogo} alt="WordPress" />
            </a>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
