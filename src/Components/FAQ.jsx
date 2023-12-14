import Accordion from "./Accordion";
const FAQ = () => {
  return (
    <div className="bg-bunker-950 flex flex-col justify-center items-center w-screen mt-20">
        <div className="flex flex-col md:flex-row text-center justify-between gap-2 md:gap-20 mb-10 text-2xl font-semibold mx-20">
            <h1>FREQUENTLY</h1>
            <h1>ASKED</h1>
            <h1>QUESTIONS</h1>
        </div>
      <Accordion />
    </div>
  );
};

export default FAQ;
