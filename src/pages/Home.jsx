import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Home = () => {
  return (
    <section className="min-h-screen flex flex-col md:flex-row bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 mt-20">
      {/* Left side - Background image with overlay text */}
      <div
        className="md:w-3/5 relative flex items-center justify-center bg-gray-200"
        data-aos="fade-right"
        data-aos-delay="0"
        data-aos-duration="1200"
      >
        {/* Background image */}
        <img
          src="/assets/banner.jpg"
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover opacity-70"
        />
        {/* Overlay */}
        <div
          className="relative z-10 p-10 md:p-20 text-left mt-60 md:mt-60 "
          data-aos="fade-down"
          data-aos-delay="600"
          data-aos-duration="1400"
        >
          <p
            className="uppercase tracking-widest text-base md:text-2xl text-gray-1200"
            style={{ fontFamily: "var(--font-montserrat)" }}
          >
            Hello, I'm
          </p>
          <h1
            className="text-4xl md:text-6xl font-bold mt-2 text-gray-900 ml-20"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Ranjitha V
          </h1>
          <h2
            className="text-xl md:text-2xl italic mt-3 text-gray-1000 ml-40"
            style={{ fontFamily: "var(--font-merriweather)" }}
          >
            Python Fullstack Trainee
          </h2>
        </div>
      </div>

      {/* Right side - Profile info */}
      <div
        className="md:w-2/5 flex flex-col items-center justify-center bg-white/70 p-10"
        data-aos="fade-left"
        data-aos-delay="200"
        data-aos-duration="1200"
      >
        {/* Profile image */}
        <div className="relative mb-6">
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-pink-300 via-purple-300 to-blue-300 blur-lg"></div>
          <img
            src="/assets/profile.jpg" // replace with your profile image in /public
            alt="Profile"
            className="relative w-40 h-40 rounded-full object-cover border-4 border-white shadow-xl"
            data-aos="zoom-in"
          data-aos-delay="600"
          data-aos-duration="1400"
          />
        </div>

        {/* Name + Role */}
        <h3
          className="text-2xl font-bold text-gray-900"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          Ranjitha V
        </h3>


        <p className="text-lg max-w-2xl text-gray-600 mt-4" data-aos="fade-down"
          data-aos-delay="600"
          data-aos-duration="1400">
        I’m a passionate <span className="text-blue-600 font-semibold">Python Fullstack Trainee at Vetri Technology Solutions</span>. 
        I love building creative, scalable, and efficient web applications using modern tools like React, Tailwind, Django, and Flask, with a strong focus on clean code, responsive design, and user experience, I aim to deliver applications that are both functional and visually appealing.
      </p>

        {/* Social icons */}
        <div className="flex gap-6 mt-6 text-xl text-gray-700">
          <a href="mailto:ranjithapython@vetritechnologysolutions.in" className="hover:text-blue-600">
            <FaEnvelope />
          </a>
          <a
            href="https://github.com/Ranjitha1304"
            target="_blank"
            rel="noreferrer"
            className="hover:text-gray-900"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/ranjitha-v-a86b26366/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-blue-700"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
