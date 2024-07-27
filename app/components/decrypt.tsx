"use client";
import React, { useState, useEffect } from "react";

const Dictionary = [".js", ".jsx", ".ts", ".tsx", ".json", ".html", ".css", ".scss", ".less", ".md", ".mdx", ".yaml", ".xml", ".xlsx"];

const getRandomIndex = () => {
  return Math.floor(Math.random() * Dictionary.length);
};

const getRandomString = (length: number) => {
  let string = '';
  for (let i = 0; i < length; i++) {
    string += Dictionary[getRandomIndex()];
  }
  return string;
};

const DecryptText: React.FC<{ initialText: string }> = ({ initialText }) => {
  const [textToShow, setTextToShow] = useState("");

  useEffect(() => {
    const totalLength = initialText.length;
    setTextToShow("");

    const revealInterval = setInterval(() => {
      setTextToShow((prevText) => prevText + getRandomString(1));
    }, 200);

    // Stop the animation after a certain time (adjust as needed)
    const animationTimeout = setTimeout(() => {
      clearInterval(revealInterval);
      setTextToShow(initialText);
    }, 2000); // Change 3000 to the duration you want for the animation

    // Clean up the interval and timeout when the component unmounts
    return () => {
      clearInterval(revealInterval);
      clearTimeout(animationTimeout);
    };

  }, [initialText]);
    return (
    <h4 className="z-10 pt-6 text-2xl text-transparent duration-2000 cursor-default text-edge-outline animate-title font-display sm:text-4xl whitespace-nowrap bg-clip-text hover:bg-white">
        {textToShow}
    </h4>
    );
    };

export default DecryptText;
