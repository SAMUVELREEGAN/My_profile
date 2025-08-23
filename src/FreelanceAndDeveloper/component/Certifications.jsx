import React, { useState } from "react";
import certificationPage from "../json/certificationPage";
import "../../FreelanceAndDeveloper/css/component/Certifications.css";

const Certifications = () => {
  const categories = Object.keys(certificationPage);
  const [category, setCategory] = useState(categories[0]);

  const handleDownload = (image, name) => {
    const link = document.createElement("a");
    link.href = image;
    link.download = `${name}.jpg`;
    link.click();
  };

  return (
    <section className="certifications">
      <h2 className="heading">Certifications</h2>

      {/* Category Buttons */}
      <div className="cert-btn-group">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`cert-btn ${category === cat ? "active" : ""}`}
            onClick={() => setCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Show Certificates */}
      {certificationPage[category].map((item) => (
        <div className="cert-layout" key={item.id}>
          {/* Left side image */}
          <div className="cert-left">
            <img src={item.image} alt={item.name} />
          </div>

          {/* Right side content */}
          <div className="cert-right">
            <h3 className="cert-title">{item.name}</h3>
            <p className="cert-description">{item.description}</p>
            <p className="cert-year">Year: {item.year}</p>
            <button
              className="download-btn"
              onClick={() => handleDownload(item.image, item.name)}
            >
              Download Certificate
            </button>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Certifications;
