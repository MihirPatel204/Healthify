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

      <main className="flex-1 flex flex-col items-center justify-center gap-10 container py-16">
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

        <div className="w-full max-w-4xl mt-8 grid grid-cols-3 gap-6">
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
      </main>

      <footer className="container py-8 border-t border-dark-500">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
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
