import Experience from "../components/Experience";
import MaxWidthWrapper from "../components/MaxWidthWrapper";
import Skills from "../components/Skills";
import { motion } from "framer-motion";

const sentence = ["Where I've  Been &", "What I Can Do"];
const SkillsSection = () => {
  return (
    <MaxWidthWrapper>
      <section className="py-16" id="experience">
        <motion.p
          className="text-xs md:text-sm text-center uppercase tracking-widest text-gray-400 mb-4"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-[#C9E651]">{"{"}</span>
          {" 02 "}
          <span className="text-[#C9E651]">{"}"}</span>
          {" - EXPERIENCE AND SKILLS "}
        </motion.p>
        <div className=" text-left md:text-center  gap-4 pt-4 pb-8 md:pb-12 lg:pb-18 max-w-3xl mx-auto">
          {/* <div className="w-24 h-[2px] bg-[linear-gradient(to_left,white_20%,transparent_100%)]"></div> */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium font-sans flex flex-wrap gap-2 justify-center">
            {sentence.map((word, index) => {
              const isHighlight = ["What I Can Do"].includes(word);
              return (
                <motion.span
                  key={word + index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{
                    delay: index * 0.3,
                    type: "spring",
                    stiffness: 100,
                  }}
                  className={isHighlight ? "text-[#C9E651] font-normal" : ""}
                >
                  {word}
                </motion.span>
              );
            })}
          </h2>
          {/* <div className="w-24 h-[2px] bg-[linear-gradient(to_right,white_20%,transparent_100%)]"></div> */}
        </div>

        <div className="mx-auto flex flex-col lg:flex-row gap-8">
          {/* Experience Section */}
          <div className="w-full lg:w-[42%]">
            <Experience />
          </div>

          {/* Skills Section - Sticky */}
          <div className="w-full lg:w-[58%] md:sticky md:top-30 h-fit">
            <Skills />
          </div>
        </div>
      </section>
    </MaxWidthWrapper>
  );
};

export default SkillsSection;
