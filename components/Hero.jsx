import React from 'react';

import Logo from './Logo';

const Hero = () => (
  <div className="hero my-5 text-center" data-testid="hero">
    <Logo testId="hero-logo" />
    <h1 className="mb-4" data-testid="hero-title">
      Welkom bij Aquathermie Dashboard
    </h1>

    <p className="lead" data-testid="hero-lead">
      {/*This is a sample application that demonstrates an authentication flow for a Regular Web App, using{' '}*/}
      {/*<a href="https://nextjs.org">Next.js</a>*/}
    </p>
  </div>
);

export default Hero;
