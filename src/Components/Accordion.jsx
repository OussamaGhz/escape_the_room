import React, { useState } from "react";

const Accordion = () => {
  const [openAccordion, setOpenAccordion] = useState(null);

  const toggleAccordion = (index) => {
    setOpenAccordion((prevOpenAccordion) =>
      prevOpenAccordion === index ? null : index
    );
  };

  const isAccordionOpen = (index) => openAccordion === index;

  return (
    <div className="w-4/5 mb-20">
      <div id="accordion-open" data-accordion="open">
        <h2 id="accordion-open-heading-1">
          <button
            type="button"
            className={`flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3 ${
              isAccordionOpen(1) ? "active" : ""
            }`}
            data-accordion-target="#accordion-open-body-1"
            aria-expanded={isAccordionOpen(1)}
            aria-controls="accordion-open-body-1"
            onClick={() => toggleAccordion(1)}
          >
            <span className="flex items-center">
              <svg
                className="w-5 h-5 me-2 shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                  clipRule="evenodd"
                ></path>
              </svg>{" "}
              What is CodeShowdown Festival all about?
            </span>
            <svg
              data-accordion-icon
              className="w-3 h-3 rotate-180 shrink-0"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5 5 1 1 5"
              />
            </svg>
          </button>
        </h2>
        <div
          id="accordion-open-body-1"
          className={`${
            isAccordionOpen(1) ? "block" : "hidden"
          } p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900`}
          aria-labelledby="accordion-open-heading-1"
        >
          <p className="mb-2 text-white ">
            CodeShowdown Festival is an event designed to foster camaraderie,
            competition, and innovation among participants by showcasing their
            diverse skills in software development and technology.
          </p>
        </div>
        {/* Repeat the structure for other accordion items (change 1 to the appropriate index) */}
        <h2 id="accordion-open-heading-1">
          <button
            type="button"
            className={`flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3 ${
              isAccordionOpen(2) ? "active" : ""
            }`}
            data-accordion-target="#accordion-open-body-1"
            aria-expanded={isAccordionOpen(2)}
            aria-controls="accordion-open-body-1"
            onClick={() => toggleAccordion(2)}
          >
            <span className="flex items-center">
              <svg
                className="w-5 h-5 me-2 shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                  clipRule="evenodd"
                ></path>
              </svg>{" "}
              How can I register for CodeShowdown Festival?
            </span>
            <svg
              data-accordion-icon
              className="w-3 h-3 rotate-180 shrink-0"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5 5 1 1 5"
              />
            </svg>
          </button>
        </h2>
        <div
          id="accordion-open-body-1"
          className={`${
            isAccordionOpen(2) ? "block" : "hidden"
          } p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900`}
          aria-labelledby="accordion-open-heading-1"
        >
          <p className="mb-2 text-white ">
            CodeShowdown Festival is an event designed to foster camaraderie,
            competition, and innovation among participants by showcasing their
            diverse skills in software development and technology.
          </p>
        </div>

        <h2 id="accordion-open-heading-1">
          <button
            type="button"
            className={`flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3 ${
              isAccordionOpen(3) ? "active" : ""
            }`}
            data-accordion-target="#accordion-open-body-1"
            aria-expanded={isAccordionOpen(3)}
            aria-controls="accordion-open-body-1"
            onClick={() => toggleAccordion(3)}
          >
            <span className="flex items-center">
              <svg
                className="w-5 h-5 me-2 shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                  clipRule="evenodd"
                ></path>
              </svg>{" "}
              How are winners determined in each challenge?
            </span>
            <svg
              data-accordion-icon
              className="w-3 h-3 rotate-180 shrink-0"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5 5 1 1 5"
              />
            </svg>
          </button>
        </h2>
        <div
          id="accordion-open-body-1"
          className={`${
            isAccordionOpen(3) ? "block" : "hidden"
          } p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900`}
          aria-labelledby="accordion-open-heading-1"
        >
          <p className="mb-2 text-white ">
            CodeShowdown Festival is an event designed to foster camaraderie,
            competition, and innovation among participants by showcasing their
            diverse skills in software development and technology.
          </p>
        </div>

        <h2 id="accordion-open-heading-1">
          <button
            type="button"
            className={`flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3 ${
              isAccordionOpen(4) ? "active" : ""
            }`}
            data-accordion-target="#accordion-open-body-1"
            aria-expanded={isAccordionOpen(4)}
            aria-controls="accordion-open-body-1"
            onClick={() => toggleAccordion(4)}
          >
            <span className="flex items-center">
              <svg
                className="w-5 h-5 me-2 shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                  clipRule="evenodd"
                ></path>
              </svg>{" "}
              How can I stay updated on event details and announcements?
            </span>
            <svg
              data-accordion-icon
              className="w-3 h-3 rotate-180 shrink-0"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5 5 1 1 5"
              />
            </svg>
          </button>
        </h2>
        <div
          id="accordion-open-body-1"
          className={`${
            isAccordionOpen(4) ? "block" : "hidden"
          } p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900`}
          aria-labelledby="accordion-open-heading-1"
        >
          <p className="mb-2 text-white ">
            CodeShowdown Festival is an event designed to foster camaraderie,
            competition, and innovation among participants by showcasing their
            diverse skills in software development and technology.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
