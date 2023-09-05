import React from "react";

import ContactForm from "../components/ContactForm";

function AboutPage() {
  return (
    <>
      <header className="center">
        <h1>About Us</h1>
        <p>
          We have created this demo to help you learn how to use Playwright.
        </p>
      </header>
      <ContactForm />
    </>
  );
}

export default AboutPage;
