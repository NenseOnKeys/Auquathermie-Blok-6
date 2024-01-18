import React from 'react';
import Logo from "./Logo";

const Footer = () => (
  <footer className="bg-light p-3 text-center" data-testid="footer">
      <Logo testId="hero-logo" />
    <div className="" data-testid="footer-logo" />
    <p data-testid="footer-text">
      Dit is een project van  <a href="https://www.s-hertogenbosch.nl/">'S-Hertogenbosch</a>
    </p>
  </footer>
);

export default Footer;
