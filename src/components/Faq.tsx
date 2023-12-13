import React, { useState } from "react";
const Faq: React.FC = () => {
  const faqData = [
    {
      question: "Is Afforai free?",
      answer:
        "Yes, Afforai is free for all new users. Upon signing up, users are given 50 permanent credits",
    },

    {
      question: "What are subscription credits versus permanent credits?",
      answer:
        "Subscription credits come from monthly payments, while permanent credits come from top ups. Subscription credits will be used before permanent credits, and subscription credits expire every month while permanent credits stay.",
    },
    {
      question:
        "Does Afforai support documents storing on the cloud like Google Drive, One Drive, or Drop Box?",
      answer:
        "Currently Afforai only support uploading local documents and websites, in the near future we will integrate these cloud solutions. Sign up with us to get updated.",
    },
    {
      question: "Does Afforai support uploading images and video?",
      answer:
        "Currently Afforai supports OCR for scanned PDF, but not via image file directly. Afforai currently working on working with video and audio transcript.",
    },
    {
      question: "Does Afforai support collaboration between accounts?",
      answer:
        "Currently Afforai is working on a solution to allow users to share chatbots and files. Sign up with us to get updated when this feature roll out.",
    },
  ];

  const [expandedIndex, setExpandedIndex] = useState<number|null>(null);

  const toggleExpand = (index: number)=> {
    setExpandedIndex((prevIndex) => (prevIndex === index ? null : index));
  };
  return (
    <div id="testimonial" className="container-fluid section">
      <div className="row">
        <div className="d-flex flex-column justify-content-center col">
          <div className="d-flex flex-column align-items-center container">
            <div className="text-center mb-3 subscip-header">FAQs</div>
            <div className="text-center" style={{ marginBottom: "40px" }}>
              For more information, check out our
              <a className="help-center" href="https://help.afforai.com/">
                Help Center
              </a>
              .
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="d-flex flex-column gap-3 col read-more">
          {faqData.map((faq, index) => (
            <div key={index} className="d-flex flex-column rounded-3">
              <div>
                <div className="d-flex" onClick={() => toggleExpand(index)}>
                  <div className="flex-grow-1">{faq.question}</div>
                  <img
                    style={{
                      transform:
                        expandedIndex === index
                          ? "rotate(180deg)"
                          : "rotate(0deg)",
                      transition: "transform 0.3s ease",
                    }}
                    src={require("../assets/readmore.svg").default}
                  />
                </div>
                {expandedIndex === index && (
                  <div className="mt-3">{faq.answer}</div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    // </div>
  );
};

export default Faq;
