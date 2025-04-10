import React from "react";
import Link from "next/link";
import Image from "next/image";

const Homepage = () => {
  return (
    <div className="h-screen ">
      <header className="container py-4 flex justify-between items-center">
        <Image
          src="/assets/icons/logo-full.svg"
          height={100}
          width={200}
          alt="CarePulse Logo"
          className="h-10 w-auto"
        />
        <Link
          href="/"
          className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-md transition-colors"
        >
          Sign In
        </Link>
      </header>

      <main className="flex-1 flex flex-col items-center justify-center gap-8 container">
        <div className="text-center max-w-3xl">
          <h1 className="text-4xl font-bold mb-4">Welcome to CarePulse</h1>
          <p className="text-xl text-gray-600 mb-8">
            Your comprehensive healthcare platform for managing patient care
            efficiently
          </p>
          <div className="flex gap-4 justify-center">
            <Link
              href="/"
              className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-md text-lg transition-colors"
            >
              Sign In
            </Link>
            <Link
              href="/about"
              className="border border-green-500 text-green-500 hover:bg-green-50 px-6 py-3 rounded-md text-lg transition-colors"
            >
              Learn More
            </Link>
          </div>
        </div>
      </main>

      <footer className="container py-6">
        <p className="text-center text-gray-600">
          © 2025 Healthify. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Homepage;
