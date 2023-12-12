import React from "react";
const Testimonial = () => {
  const data = [
    {
      id: 1,
      quote:
        "Great tool for text analysis and emphasizing the main idea of a document. Especially when you need a quick answer without  tones of epithets that beautifully describe something that can  be actually described in a few words:)",
      name: "Anatolii, Founder of Savvy Planning Systems",
    },
    {
      id: 2,
      quote:
        "Great tool for text analysis and emphasizing the main idea of a document. Especially when you need a quick answer without  tones of epithets that beautifully describe something that can  be actually described in a few words:)",
      name: "Anatolii, Founder of Savvy Planning Systems",
    },
    {
      id: 3,
      quote:
        "Great tool for text analysis and emphasizing the main idea of a document. Especially when you need a quick answer without  tones of epithets that beautifully describe something that can  be actually described in a few words:)",
      name: "Anatolii, Founder of Savvy Planning Systems",
    },
    {
      id: 4,
      quote:
        "Great tool for text analysis and emphasizing the main idea of a document. Especially when you need a quick answer without  tones of epithets that beautifully describe something that can  be actually described in a few words:)",
      name: "Anatolii, Founder of Savvy Planning Systems",
    },
  ];
  return (
    <div id="testimonial" className="container-fluid">
      <div className="row" style={{ marginBottom: "32px" }}>
        <div className="d-flex flex-column justify-content-center col">
          <div className="d-flex flex-column align-items-center container">
            <a
              className="mb-2"
              href="https://www.producthunt.com/products/afforai/"
              target="_blank"
            >
              <img
                src={require("../assets/ph-review.png").default}
                className="img-fluid"
                alt="Product Hunt Review 4.9/5"
                width="170px"
              />
            </a>
            <div className="text-center mb-2 subscip-header fs-36">
              See what our users say
            </div>
            <div className="text-center mb-2">
              Loved by thousands, all around the World
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="infinite-scroll-loop-outer">
          <div className="infinite-scroll-loop-inner logos">
            {data.map((i) => (
              <div key={i.id} className="logos-slide">
                <div className="d-flex flex-column rounded-3">
                  <div className="flex-grow-1 text-wrap">{i.quote}</div>
                  <div className="d-flex justify-content-between align-items-center pt-4">
                    <div className="d-flex align-items-center gap-2">
                      <picture>
                        <img
                          src={require("../assets/0-4.png").default}
                          className="img-fluid"
                          alt="Anatolii, Founder of Savvy Planning Systems"
                        />
                      </picture>
                      <div className="fs-14">{i.name}</div>
                    </div>
                    <a
                      href="https://www.producthunt.com/products/afforai/"
                      target="_blank"
                      className="d-md-inline-flex d-none align-items-center rounded-3 px-3 px-md-2 py-1 producthunt"
                    >
                      <div className="d-inline-flex align-items-center gap-1">
                        <img
                          src={require("../assets/producthunt.svg").default}
                          alt="Product Hunt logo"
                          height="16"
                        />
                        <span>View on Product Hunt</span>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="infinite-scroll-loop-inner logos logos-right">
            {data.map((i) => (
              <div key={i.id} className="logos-slide">
                <div className="d-flex flex-column rounded-3">
                  <div className="flex-grow-1 text-wrap">{i.quote}</div>
                  <div className="d-flex justify-content-between align-items-center pt-4">
                    <div className="d-flex align-items-center gap-2">
                      <picture>
                        <img
                          src={require("../assets/0-4.png").default}
                          className="img-fluid"
                          alt="Anatolii, Founder of Savvy Planning Systems"
                        />
                      </picture>
                      <div className="fs-14">{i.name}</div>
                    </div>
                    <a
                      href="https://www.producthunt.com/products/afforai/"
                      target="_blank"
                      className="d-md-inline-flex d-none align-items-center rounded-3 px-3 px-md-2 py-1 producthunt"
                    >
                      <div className="d-inline-flex align-items-center gap-1">
                        <img
                          src={require("../assets/producthunt.svg").default}
                          alt="Product Hunt logo"
                          height="16"
                        />
                        <span>View on Product Hunt</span>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Testimonial;
