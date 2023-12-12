import React from "react";
const WorkFlow = () => {
  return (
    <div className="container-fluid workflow">
      <div className="row">
        <div className="d-flex flex-column justify-content-center col">
          <div className="d-flex flex-column align-items-center container">
            <div className="d-inline-flex justify-content-center align-items-center  ">
              Why choose us?
            </div>
            <div className="text-center subscip-header fs-36 my-3">
              Built for the user
            </div>
            <div className="text-center term">
              Afforai is where exceptional customer focus meets exceptional
              technology.
            </div>
          </div>
        </div>
      </div>
      <div className="row workflow-blocks">
        <div className="d-flex col-md-4 offset-md-1">
          <div className="d-flex flex-column rounded-4">
            <div className="img-content">
              <picture>
                <source type="image/webp" />
                <img
                  src={require("../assets/laptop-landing-6.png").default}
                  className="img-fluid"
                  alt="Afforai supports multiple languages"
                />
              </picture>
            </div>
            <div className="flex-grow-1 d-flex flex-column px-3 pt-2 pb-4">
              <div className="d-inline-flex align-items-center gap-2">
                <span>Cross Language Querying</span>
                <div className="d-flex align-items-center new-info">
                  <span>NEW</span>
                </div>
              </div>
              <div>
                Afforai is able to translate your documents to more than 100
                languages, meaning wherever you’re from, you can be assured we
                can help.
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex col-md-6">
          <div className="d-flex flex-column rounded-4">
            <div className="img-content">
              <picture>
                <img
                  src={require("../assets/laptop-landing-7.png").default}
                  className="img-fluid"
                  alt="Afforai support multiple document formats"
                />
              </picture>
            </div>
            <div className="flex-grow-1 d-flex flex-column px-3 pt-2 pb-4">
              <div className="d-inline-flex align-items-center gap-2">
                <span>Multiple file types supported</span>
              </div>
              <div>
                Afforai can extract data from a multitude of formats, including;
                PDF, URL, DOCX, PPTX &amp; XLSX, as well as your own text &amp;
                links from Websites. The possibilities are limitless!
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row workflow-blocks">
        <div className="d-flex flex-column col-md-6 offset-md-1">
          <div className="flex-grow-1 d-flex flex-column rounded-4">
            <div className="img-content">
              <picture>
                <img
                  src={require("../assets/laptop-landing-8.png").default}
                  className="img-fluid"
                  alt="Afforai shows you how it got its answer"
                />
              </picture>
            </div>
            <div className="d-flex flex-column px-3 pt-2 pb-4">
              <div className="d-inline-flex align-items-center gap-2">
                <span>Valuable Data Citation</span>
                <div className="d-flex align-items-center new-info">
                  <span>NEW</span>
                </div>
              </div>
              <div>
                Afforai is able to show exactly where your data has been
                extracted from &amp; highlight it for you, so you never loose
                your time validating information again.
              </div>
            </div>
          </div>
          <div className="flex-grow-1 d-flex flex-column rounded-4">
            <div className="img-content">
              <picture>
                <img
                  src={require("../assets/laptop-landing-10.png").default}
                  className="img-fluid"
                  alt="Built in Document Viewer"
                />
              </picture>
            </div>
            <div className="d-flex flex-column px-3 pt-2 pb-4">
              <div className="d-inline-flex align-items-center gap-2">
                <span>Built in Document Viewer</span>
              </div>
              <div>
                Never Switch tabs again. Afforai’s document viewer means that
                you can have your uploaded files right next to your chatbot,
                giving you the ability to search the file, and refer to it for
                data citations.
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex col-md-4">
          <div className="d-flex flex-column justify-content-between rounded-4 h-100">
            <div className="img-content">
              <picture>
                <img
                  src={require("../assets/laptop-landing-9.png").default}
                  className="img-fluid"
                  alt="Afforai is secured with the power of the cloud"
                />
              </picture>
            </div>
            <div className="flex-grow-1 d-flex flex-column px-3 pt-2 pb-4">
              <div className="d-inline-flex align-items-center gap-2">
                <span>Unbreakable Security</span>
              </div>
              <div>
                Afforai uses Azure Server &amp; Azure OpenAI API. In other
                words, your data is more than safe with us.{" "}
                <a href="/security" target="_blank" rel="noopener noreferrer">
                  Learn more
                </a>
                .
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkFlow;
