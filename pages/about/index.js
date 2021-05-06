import { Header, Content } from '../../components/layout/layout';
import Head from 'next/head';
import styles from './about.module.scss';

export default function About() {
  return (
    <>
      <Head>
        <title>About • Class Profile</title>
      </Head>
      <Header />
      <div className={styles.content}>
        <div className={styles.heading}>
          <h2>About Systems Design Engineering </h2>
          Systems Design Engineering is a unique interdisciplinary engineering
          program at the University of Waterloo that explores problem solving
          through a systems-thinking methodology. Our class, the class of 2025,
          has had a first term experience unlike any other as all of our courses
          were taught online due to the pandemic. We hope that this class
          profile will reflect some of the different perspectives that our class
          may hold, and that you as the user will take something away from
          exploring the site.
          <br />
          <a href="https://www.youtube.com/watch?v=Za3wssEphYw">
            <img src="/assets/insert-pic.png" />
          </a>
          <br />
          <h2>Preface</h2>
          The objective of this website was to better understand the histories
          of the students in the Systems Design Engineering (SYDE) class of
          2025, as well as understanding the personalities of the students. This
          was also an opportunity to display and test our skills in design, data
          science, frontend development, and team collaboration. 94 students in
          our first year class responded to this survey. The data from each
          question is displayed throughout the website. This is an iterative
          project that we are committed to working on for the entirety of our
          degree, so we look forward to seeing how it progresses over time!
          <br />
          <br />
          <h2>Credits</h2>
          Names are listed alphabetically and not in order of who contributed
          the most.
        </div>

        <div className={styles.row}>
          <div className={styles.column}>
            <h3 className={styles.pm}>PM</h3>
            <a href="https://josephlamonica.me/" target="_blank">
              {' '}
              Joseph Lamonica
            </a>
            <a href="https://www.linkedin.com/in/sean-ashley/" target="_blank">
              Sean Ashley
            </a>
            <a href="https://shivamsh.me/" target="_blank">
              {' '}
              Shivam Sharma{' '}
            </a>
          </div>

          <div className={styles.column}>
            <h3 className={styles.dataSci}>Data Science</h3>
            <a href="https://www.linkedin.com/in/alan-zhang1/" target="_blank">
              Alan Zhang{' '}
            </a>
            <a
              href="https://www.linkedin.com/in/nicolas-palmar/"
              target="_blank"
            >
              {' '}
              Nicolas Palmar{' '}
            </a>
            <a href="https://nirmalhegde.me" target="_blank">
              Nirmal Hegde{' '}
            </a>
            <a href="https://www.linkedin.com/in/sean-ashley/" target="_blank">
              {' '}
              Sean Ashley{' '}
            </a>
          </div>

          <div className={styles.column}>
            <h3 className={styles.design}>Design</h3>
            <a href="https://github.com/ebrahim02-ag" target="_blank">
              {' '}
              Ebrahim Yaakoub Agha{' '}
            </a>
            <a href="https://github.com/eevanwong" target="_blank">
              {' '}
              Evan Wong{' '}
            </a>
            <a href="https://josephlamonica.me/" target="_blank">
              {' '}
              Joseph Lamonica{' '}
            </a>
            <a href="https://shivamsh.me/" target="_blank">
              {' '}
              Shivam Sharma{' '}
            </a>
          </div>

          <div className={styles.column}>
            <h3 className={styles.webDev}>Web Dev</h3>
            <a href="https://github.com/ebrahim02-ag" target="_blank">
              {' '}
              Ebrahim Yaakoub Agha{' '}
            </a>
            <a href="https://github.com/eevanwong" target="_blank">
              Evan Wong{' '}
            </a>
            <a
              href="https://www.linkedin.com/in/hannah-hepburn/"
              target="_blank"
            >
              {' '}
              Hannah Hepburn{' '}
            </a>
            <a href="https://parminpatel.me/" target="_blank">
              {' '}
              Parmin Patel{' '}
            </a>
            <a href="https://www.linkedin.com/in/sean-ashley/" target="_blank">
              Sean Ashley
            </a>
            <a href="https://shivamsh.me/" target="_blank">
              {' '}
              Shivam Sharma{' '}
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
