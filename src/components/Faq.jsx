import React, { useState } from "react";
import { FAQ_DESCRIPTION, FAQS } from "../constants";
import { FaMinus, FaPlus } from "react-icons/fa";

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="my-20" id="faq">
      <div className="container mx-auto relative flex lg:flex-row flex-col gap-12">
        {/* Sticky FAQ */}
        <div className="lg:flex flex-col gap-5 lg:w-1/3 h-fit lg:sticky md:top-24">
          {" "}
          {/* Adjusted top value */}
          <h2 className="text-4xl font-semibold tracking-tighter">
            Frequently Asked Questions
          </h2>
          <p className="text-lg">{FAQ_DESCRIPTION}</p>
        </div>

        <div className="lg:w-2/3">
          {FAQS.map((faq, index) => (
            <div className="mb-4 border-b pb-4" key={index}>
              <div
                onClick={() => handleToggle(index)}
                className="p-8 flex cursor-pointer items-center justify-between"
              >
                <h3 className="text-2xl">{faq.question}</h3>
                <div>
                  {activeIndex === index ? (
                    <FaMinus className="text-xl" />
                  ) : (
                    <FaPlus className="text-xl" />
                  )}
                </div>
              </div>
              <div
                className={`mt-4 overflow-hidden text-lg transition-all duration-500 ${
                  activeIndex === index ? "max-h-screen" : "max-h-0"
                }`}
              >
                <p className="p-8">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
