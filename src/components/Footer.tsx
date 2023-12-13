import React from "react";

const Footer: React.FC = () => {
  return (
    <div className="pb-md-5 container-fluid">
      <div className="row">
        <div className="pt-5 d-flex justify-content-center col">
          <div className="d-flex flex-wrap flex-grow-1 justify-content-between rounded-4 footer">
            <div className="d-flex flex-column mb-4">
              <div className="d-flex flex-column" style={{ gap: "16px" }}>
                <div className="d-flex gap-2 mb-md-0">
                  <picture>
                    <img
                      src={require("../assets/logo-new-violet.png").default}
                      alt="Afforai Logo"
                      height="24px"
                      width="24px"
                    />
                  </picture>
                  <div>Afforai</div>
                </div>
                <div>
                  Afforai is your research tool in to damn near anything.
                  Helping you summarise, translate, and withdraw data from
                  documents.
                </div>
                <div>Copyright © 2023 Afforai Inc. All rights reserved.</div>
              </div>
              <a
                href="https://www.producthunt.com/posts/afforai?utm_source=badge-top-post-badge&am p;utm_medium=badge&amp;utm_souce=badge-afforai"
                target="_blank"
              >
                <img
                  src="https://api.producthunt.com/widgets/embed-image/v1/top-post-badge.svg?post_id=403202&amp;theme=light&amp;period=daily"
                  alt="Afforai - Summarize, interact, translate your documents with AI | Product Hunt"
                  width="195"
                  height="42"
                />
              </a>
              <div className="d-flex flex-column">
                <div className="sputnik">Backed by</div>
                <img
                  src={require("../assets/sputnikatx.png").default}
                  height="46"
                  width="137"
                  alt="Sputnik ATX VC"
                />
              </div>
            </div>
            <div className=" d-flex flex-column">
              <div>Company</div>
              <a href="/our_story">
                <div>Our Story</div>
              </a>
              <a href="https://afforai.getrewardful.com/signup" target="_blank">
                <div>Affiliate</div>
              </a>
              <a href="/security" className="policy">
                <div>Security</div>
              </a>
              <a
                href="https://trello.com/b/98yNMfwA/afforai-roadmap"
                target="_blank"
              >
                <div>Roadmap</div>
              </a>
              <a href="/contact">
                <div>Contact Us</div>
              </a>
            </div>
            <div className=" d-flex flex-column">
              <div>Resources</div>
              <a href="https://help.afforai.com/" target="_blank">
                <div>Help Center</div>
              </a>
              <a href="/documentation" className="policy">
                <div>API Docs</div>
              </a>
              <a href="/terms_of_use" className="policy">
                <div>Terms of Use</div>
              </a>
              <a href="/privacy_policy" className="policy">
                <div>Privacy Policy</div>
              </a>
            </div>
            <div className=" d-flex flex-column">
              <div>Follow Us</div>
              <a href="https://www.facebook.com/groups/afforai" target="_blank">
                <div>Facebook Group</div>
              </a>
              <a href="https://linkedin.com/company/afforai/" target="_blank">
                <div>LinkedIn</div>
              </a>
              <a href="https://twitter.com/afforai/" target="_blank">
                <div>Twitter</div>
              </a>
              <a href="https://medium.com/@alec-afforai" target="_blank">
                <div>Medium Blog</div>
              </a>
            </div>
            <div className=" d-flex flex-column">
              <div>Language</div>
              <div>English</div>
              <div>Vietnamese</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
