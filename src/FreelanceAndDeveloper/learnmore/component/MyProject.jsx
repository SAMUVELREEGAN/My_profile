import "../css/MyProject.css";
import Slider from "react-slick";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useContext, useState } from "react";
import Modal from "react-modal";
import { MyContext } from "../../context/MyContext";

// Required for accessibility
Modal.setAppElement("#root");

// Custom Arrows
const NextArrow = ({ onClick }) => (
  <div className="arrow next" onClick={onClick}>
    <FaArrowRight />
  </div>
);

const PrevArrow = ({ onClick }) => (
  <div className="arrow prev" onClick={onClick}>
    <FaArrowLeft />
  </div>
);

const MyProject = () => {
  const { projectnew } = useContext(MyContext);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalData, setModalData] = useState(null);

  const openModal = (item) => {
    setModalData(item);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setModalData(null);
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 700,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div className="project-container">
      <h2 className="project-title">My Projects</h2>

      <Slider {...settings}>
        {projectnew.map((item) => (
          <div className="project-slide" key={item.id}>
            <div className="project-card">
              <div className="image-wrapper">
                <img src={item.pic} alt={item.title} className="project-img" />
              </div>

              <h3>{item.title}</h3>

              {/* Languages */}
              <div className="hide-scrollbar tech-tags">
                {item.language.split(",").map((lang, index) => (
                  <button key={index} className="tag-btn">
                    {lang.trim()}
                  </button>
                ))}
              </div>

              <p className="description">{item.description}</p>

              <button className="all_btn1" onClick={() => openModal(item)}>
                Learn More
              </button>
            </div>
          </div>
        ))}
      </Slider>

      {/* Modal */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={{
          content: {
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            background: "white",
            padding: "30px",
            borderRadius: "16px",
            maxWidth: "500px",
            width: "90%",
            boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
          },
          overlay: {
            backgroundColor: "rgba(0,0,0,0.6)",
            zIndex: 1000,
          },
        }}
      >
        <button
          onClick={closeModal}
          style={{
            position: "absolute",
            top: 10,
            right: 15,
            background: "transparent",
            border: "none",
            fontSize: "24px",
            cursor: "pointer",
            color: "#333",
          }}
        >
          &times;
        </button>

        {modalData && (
          <div>
            <h2 style={{ marginBottom: "10px", color: "#222" }}>
              {modalData.title}
            </h2>
            <p className="text-dark">
              <strong c>Language:</strong> {modalData.language}
            </p>
            <p className="text-dark">
              <strong>Link: </strong>
              <a
                href={modalData.link_name}
                target="_blank"
                rel="noopener noreferrer"
               className="modal-content">
                {modalData.link_name}
              </a>
            </p>
            <p style={{ marginTop: "10px", color: "#555" }}>
              {modalData.description}
            </p>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default MyProject;
