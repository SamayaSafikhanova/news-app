import React, { useState } from "react";
import { Link } from "react-router-dom";
const Navbar: React.FC = () => {
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const handleClick = () => {
    setIsMobile(!isMobile);
  };
  const dynamicClass = isMobile ? "d-flex" : "d-none";
  return (
    <div>
      <nav className="py-0 py-md-4 px-md-5 flex-column navbar navbar-expand-md navbar-light fixed-top">
        <div className="container-fluid">
          <div className="w-100 d-flex align-items-center justify-content-between">
            <Link
              to="/"
              className="d-flex flex-shrink-1 justify-content-start align-items-center me-0 py-0 navbar-brand"
            >
              <picture>
                <source type="image/webp" />
                <img
                  src={require("../assets/logo-new-violet.png").default}
                  alt="Afforai Logo"
                  height="24px"
                  width="24px"
                />
              </picture>
              <div>Afforai</div>
            </Link>
            <div className="d-md-flex d-none justify-content-center align-items-center navbar-nav">
              <Link to="anotherpage" className="mx-2 nav-link">
                <span>Affiliate</span>
              </Link>
              <Link to="anotherpage" className="mx-2 nav-link">
                <span>Pricing</span>
              </Link>
              <a
                href="/#testimonial"
                data-rr-ui-event-key="/#testimonial"
                className="mx-2 nav-link"
              >
                <span>Testimonials</span>
              </a>
              <Link to="anotherpage" className="mx-2 nav-link">
                <span>Help Center</span>
              </Link>
            </div>
            <div className="d-flex flex-row justify-content-end align-items-center gap-2 navbar-nav">
              <button
                type="button"
                className=" new-btn gray px-2 px-md-3 btn btn-primary"
              >
                Log in
              </button>
              <button
                type="button"
                className="new-btn violet-fill px-2 px-md-3 btn btn-primary"
              >
                Try for free
              </button>
              <div
                className="d-block d-md-none navigation-toggler"
                onClick={handleClick}
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 512 512"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="32"
                    d="M96 256h320M96 176h320M96 336h320"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
          <div
            className={`justify-content-start align-items-start navbar-nav ${dynamicClass}`}
          >
            <Link to="anotherpage" target="_blank" className="mx-2 nav-link">
              <span>Affiliate</span>
            </Link>
            <Link to="anotherpage" className="mx-2 nav-link">
              <span>Pricing</span>
            </Link>
            <a
              href="/#testimonial"
              data-rr-ui-event-key="/#testimonial"
              className="mx-2 nav-link"
            >
              <span>Testimonials</span>
            </a>
            <Link to="anotherpage" className="mx-2 nav-link">
              <span>Help Center</span>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
