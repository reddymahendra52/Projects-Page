import React from "react";
import "./Categories.css";

const Categories = () => {
  function smoothScrollTo(target) {
    const targetElement = document.querySelector(target);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: "smooth",
      });
    }
  }

  function handleLinkClick(event, target) {
    event.preventDefault();
    smoothScrollTo(target);
  }

  const categoryLinks = [
    { id: "React", text: "React" },
    { id: "Next", text: "Next.js" },
    { id: "MERN", text: "MERN" },
    { id: "Fundamental", text: "Fundamental" },
  ];

  return (
    <div className="categories">
      <h2 className="categories-heading">Categories</h2>
      <div className="categories-list">
        {categoryLinks.map((link) => (
          <a
            key={link.id}
            href={`#${link.id}`}
            className="categories-button"
            onClick={(event) => handleLinkClick(event, `#${link.id}`)}
          >
            {link.text}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Categories;
