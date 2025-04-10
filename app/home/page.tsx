import React from "react";
import Link from "next/link";
import Image from "next/image";

const Homepage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-dark-300">
      <header className="container py-6 flex justify-between items-center">
        <Image
          src="/assets/icons/logo-full.svg"
          height={100}
          width={200}
          alt="CarePulse Logo"
          className="h-12 w-auto"
        />
        <Link
          href="/?redirect=false"
          className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-md transition-colors shadow-sm"
        >
          Sign In
        </Link>
      </header>

      <main className="flex-1 flex flex-col items-center justify-center gap-16 container py-16">
        {/* Hero Section */}
        <div className="text-center max-w-3xl">
          <span className="inline-block bg-green-500 bg-opacity-20 text-green-500 text-sm px-3 py-1 rounded-full mb-4 font-medium">
            Healthcare Simplified
          </span>
          <h1 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-blue-500">
            Welcome to CarePulse
          </h1>
          <p className="text-xl text-dark-700 mb-10 max-w-2xl mx-auto leading-relaxed">
            Your comprehensive healthcare platform for managing patient care
            efficiently with cutting-edge technology and a user-friendly
            interface
          </p>
          <div className="flex gap-6 justify-center">
            <Link
              href="/?redirect=false"
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-md text-lg transition-colors shadow-md hover:shadow-lg"
            >
              Sign In
            </Link>
            <Link
              href="/about"
              className="border-2 border-green-500 text-green-500 hover:bg-dark-400 px-8 py-4 rounded-md text-lg transition-colors"
            >
              Learn More
            </Link>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-dark-400 p-6 rounded-lg shadow-sm border border-dark-500 text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-500 bg-opacity-20 text-blue-500 mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="font-semibold mb-2 text-white">Easy to Use</h3>
            <p className="text-dark-700 text-sm">
              Intuitive interface designed for healthcare professionals
            </p>
          </div>
          <div className="bg-dark-400 p-6 rounded-lg shadow-sm border border-dark-500 text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-green-500 bg-opacity-20 text-green-500 mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
            </div>
            <h3 className="font-semibold mb-2 text-white">Secure Platform</h3>
            <p className="text-dark-700 text-sm">
              Your data is protected with industry-leading security
            </p>
          </div>
          <div className="bg-dark-400 p-6 rounded-lg shadow-sm border border-dark-500 text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-purple-500 bg-opacity-20 text-purple-500 mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <h3 className="font-semibold mb-2 text-white">Fast & Reliable</h3>
            <p className="text-dark-700 text-sm">
              Built for speed and dependability when it matters most
            </p>
          </div>
        </div>

        {/* About Section */}
        <section className="w-full max-w-5xl py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4 text-white">
                About CarePulse
              </h2>
              <p className="text-dark-700 mb-4">
                CarePulse is a cutting-edge healthcare management platform
                designed to streamline patient care, administrative tasks, and
                healthcare operations.
              </p>
              <p className="text-dark-700 mb-6">
                Our mission is to transform healthcare delivery by providing
                tools that enhance efficiency, improve patient outcomes, and
                reduce administrative burden.
              </p>
              <ul className="space-y-2">
                {[
                  "Patient Management",
                  "Electronic Health Records",
                  "Appointment Scheduling",
                  "Billing & Invoicing",
                ].map((item) => (
                  <li key={item} className="flex items-center text-dark-700">
                    <svg
                      className="h-5 w-5 text-green-500 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex justify-center">
              <div className="bg-dark-400 p-1 rounded-lg border border-dark-500">
                <Image
                  src="/assets/images/doctor-dashboard.png"
                  width={500}
                  height={350}
                  alt="Doctor using CarePulse"
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="w-full max-w-5xl py-8">
          <h2 className="text-3xl font-bold mb-8 text-center text-white">
            What Our Users Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: "Dr. Sarah Johnson",
                role: "Cardiologist",
                image: "/assets/images/testimonial-1.jpg",
                quote:
                  "CarePulse has transformed how I manage my practice. The intuitive interface saves me hours each week.",
              },
              {
                name: "Mark Wilson",
                role: "Hospital Administrator",
                image: "/assets/images/testimonial-2.jpg",
                quote:
                  "The analytics and reporting features have given us invaluable insights into our operations.",
              },
              {
                name: "Dr. Emily Chen",
                role: "Family Physician",
                image: "/assets/images/testimonial-3.jpg",
                quote:
                  "Patient engagement has improved significantly since we started using CarePulse's patient portal.",
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="bg-dark-400 p-6 rounded-lg border border-dark-500 flex flex-col"
              >
                <div className="flex items-center mb-4">
                  <div className="h-12 w-12 rounded-full bg-dark-500 overflow-hidden mr-4">
                    <svg
                      className="h-12 w-12 text-dark-600"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-white font-medium">
                      {testimonial.name}
                    </h3>
                    <p className="text-dark-600 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-dark-700 italic flex-grow">
                  "{testimonial.quote}"
                </p>
                <div className="flex mt-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg
                      key={star}
                      className="h-5 w-5 text-green-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Us Section */}
        <section className="w-full max-w-5xl py-8" id="contact">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-4 text-white">Contact Us</h2>
              <p className="text-dark-700 mb-6">
                Have questions about CarePulse? Our team is here to help. Fill
                out the form and we'll get back to you as soon as possible.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="inline-flex items-center justify-center h-10 w-10 rounded-md bg-green-500 bg-opacity-20 text-green-500 mr-3">
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-white font-medium">Phone</h3>
                    <p className="text-dark-700">635-660-3075</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="inline-flex items-center justify-center h-10 w-10 rounded-md bg-blue-500 bg-opacity-20 text-blue-500 mr-3">
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-white font-medium">Email</h3>
                    <p className="text-dark-700">support@carepulse.com</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="inline-flex items-center justify-center h-10 w-10 rounded-md bg-purple-500 bg-opacity-20 text-purple-500 mr-3">
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-white font-medium">Location</h3>
                    <p className="text-dark-700">
                      123, Sindhu Bhavan Rd, Bopal
                    </p>
                    <p className="text-dark-700">Ahmedabad, Gujarat</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-dark-400 p-6 rounded-lg border border-dark-500">
              <form className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-dark-700 mb-1"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-3 py-2 bg-dark-300 border border-dark-500 rounded-md text-white focus:outline-none focus:ring-1 focus:ring-green-500"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-dark-700 mb-1"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-3 py-2 bg-dark-300 border border-dark-500 rounded-md text-white focus:outline-none focus:ring-1 focus:ring-green-500"
                      placeholder="Your email"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-dark-700 mb-1"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-3 py-2 bg-dark-300 border border-dark-500 rounded-md text-white focus:outline-none focus:ring-1 focus:ring-green-500"
                    placeholder="Subject"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-dark-700 mb-1"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-3 py-2 bg-dark-300 border border-dark-500 rounded-md text-white focus:outline-none focus:ring-1 focus:ring-green-500"
                    placeholder="Your message"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 focus:ring-offset-dark-400"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="container py-8 border-t border-dark-500">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <Image
              src="/assets/icons/logo-full.svg"
              height={80}
              width={160}
              alt="CarePulse Logo"
              className="h-8 w-auto mb-4"
            />
            <p className="text-dark-700 mb-4">
              Transforming healthcare management through innovative technology
              solutions.
            </p>
            <div className="flex space-x-4">
              {["facebook", "twitter", "instagram", "linkedin"].map(
                (social) => (
                  <a
                    key={social}
                    href={`#${social}`}
                    className="text-dark-600 hover:text-green-500"
                  >
                    <span className="sr-only">{social}</span>
                    <div className="h-6 w-6 rounded bg-dark-500 flex items-center justify-center">
                      <svg
                        className="h-4 w-4"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2C6.477 2 2 6.477 2 12c0 5.523 4.477 10 10 10s10-4.477 10-10c0-5.523-4.477-10-10-10z" />
                      </svg>
                    </div>
                  </a>
                )
              )}
            </div>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Solutions</h3>
            <ul className="space-y-2">
              {[
                "Patient Management",
                "Electronic Records",
                "Telehealth",
                "Billing & Invoicing",
                "Analytics",
              ].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-dark-700 hover:text-green-500">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {[
                "About Us",
                "Careers",
                "Partners",
                "News & Media",
                "Contact Us",
              ].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-dark-700 hover:text-green-500">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              {[
                "Help Center",
                "Documentation",
                "Training",
                "Blog",
                "Events",
              ].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-dark-700 hover:text-green-500">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-dark-500">
          <p className="text-dark-700">
            © 2025 CarePulse. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link
              href="/privacy"
              className="text-dark-600 hover:text-dark-700 text-sm"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-dark-600 hover:text-dark-700 text-sm"
            >
              Terms of Service
            </Link>
            <Link
              href="/contact"
              className="text-dark-600 hover:text-dark-700 text-sm"
            >
              Contact
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Homepage;
