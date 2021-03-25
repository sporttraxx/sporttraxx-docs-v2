import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';
import Translate, { translate } from '@docusaurus/Translate';

const features = [
  {
    title: 'Tracking',
    imageLink: 'docs/tracking/tracking-before',
    imageUrl: 'img/delivery.png'
  },
  {
    title: 'Timing',
    imageLink: 'docs/timing/timing-before',
    imageUrl: 'img/chronometer.svg'
  },
  {
    title: 'Results',
    imageLink: 'docs/results/results-before',
    imageUrl: 'img/podium.svg'
  },
  {
    title: 'Hardware',
    imageLink: 'docs/hardware/hardware-intro',
    imageUrl: 'img/hardware.png'
  },
];

function Feature({ imageUrl, imageLink, title }) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <a className='' href={imageLink}>
            <img className={styles.featureImage} src={imgUrl} alt={title} />
          </a>
        </div>
      )}
      <h3 className='featureTitle'>{title}</h3>
    </div>
  );
}

export default function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout
      title={`Homepage`}
      /* description="Description will go into a meta tag in <head />"*/>
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <svg class="svg" viewBox="0 0 600 200" xmlns="http://www.w3.org/2000/svg">
            <path className='sport' d="M251.4 8.893h20.68V.795H220.41v8.098h20.567v37.432h10.42V8.893zm-48.82-.258c3.203 0 4.678.61 4.678 3.62v5.486c0 3-1.475 3.62-4.68 3.62h-23.472V8.635h23.473zm-33.71 37.69h10.236V29.122h9.915L207.1 46.325h14.93l-20.672-17.203h5.902c6.86 0 10.063-2.48 10.063-8.822V9.602c0-6.35-3.203-8.807-10.062-8.807h-38.39v45.53zM119.82 9.153h34.41v28.89h-34.41V9.154zm-10.4 2.66v24.015c0 8.565 2.687 10.768 11.09 10.768h33.017c8.416 0 11.113-2.203 11.113-10.768V11.812c0-8.56-2.697-10.764-11.113-10.764H120.51c-8.403 0-11.09 2.205-11.09 10.764M89.27 8.892c3.24 0 4.69.63 4.69 3.632v4.854c0 3.005-1.45 3.633-4.69 3.633h-23.45V8.894h23.45zM55.586 46.597h10.237V28.844h28.14c6.86 0 10.075-2.473 10.075-8.815V9.866c0-6.344-3.215-8.82-10.075-8.82H55.586v45.55zM40.313 7.938v5.216l9.187-2.202v-.974C49.5 2.116 46.364 0 38.387 0H12.933c-8.412 0-11.1 2.21-11.1 10.768V15.8c0 8.57 2.688 10.772 11.1 10.772H40.9v10.42H9.2V31.61L0 33.55v1.23c0 8.566 2.78 10.77 11.192 10.77h27.715c8.44 0 11.195-2.204 11.195-10.77v-6.27c0-8.553-2.756-10.77-11.195-10.77H10.95V7.94h29.363z" fill="white" fill-rule="evenodd" />
            <path d="M0 55.03v17.032h42.938V150H64.56V72.062h43.157v-17.03H0zm111.875 0V150h21.438v-35.938h20.437L191 150h45.688l11.125-20.875h58.937L317.875 150H359.22l31.342-35.47L424.656 150h33.687l31.344-35.47L523.813 150h29.657l-50.095-51.438L544 55.032h-25.03l-28.22 30.75-29.844-30.75h-41.092l-28.19 30.75-29.874-30.75h-29.03l44.81 46.25-38.624 42.75-50.25-89h-20.844l-50.53 90.843-37.438-31.813h12.22c14.293 0 20.81-5.14 20.81-18.156v-22.5c0-13.228-6.517-18.375-20.81-18.375h-80.19zm326.594 6.814l38.217 39.437-33.593 37.19-38.844-39.907 34.22-36.72zM133.31 71.406h49.47c6.538 0 9.937 1.32 9.937 7.625v11.032c0 6.3-3.4 7.657-9.94 7.657h-49.468V71.405zm143.75.875l20.844 39.564h-40.812l19.97-39.563z" fill="#0e88d3" fill-rule="evenodd" />
          </svg>
          <p className="hero__subtitle">
            <Translate id="homepage.tagline">
              This website is addressed to Sporttraxx Team members. Its aim is to provide a full description of the features of both hardware and software, and a guide of most of the functions and options.
            </Translate></p>
          <p className="hero__subtitle">🚧 Work in Progress 🚧</p>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}
