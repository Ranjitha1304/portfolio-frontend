import React from "react";

const Footer = () => (
  <footer className="bg-slate-900 text-slate-200 py-6 mt-12">
    <div className="max-w-6xl mx-auto px-4 text-center">
      <div className="mb-3">© {new Date().getFullYear()} Ranjitha.V — All rights reserved.</div>
      <div className="flex items-center justify-center gap-4">
        <a href="https://github.com/Ranjitha1304" target="_blank" rel="noreferrer">GitHub</a>
        <a href="https://www.linkedin.com/in/ranjitha-v-a86b26366/" target="_blank" rel="noreferrer">LinkedIn</a>
        <a href="mailto:ranjithapython@vetritechnologysolutions.in">Email</a>
      </div>
    </div>
  </footer>
);

export default Footer;
