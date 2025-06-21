import Experience from "../components/Experience";
import MaxWidthWrapper from "../components/MaxWidthWrapper";
import SectionHeader from "../components/SectionHeader";
import Skills from "../components/Skills";
import { motion } from "framer-motion";

const sentence = ["Where I've  Been &", "What I Can Do"];
const SkillsSection = () => {
  return (
    <MaxWidthWrapper>
      <section className="py-16" id="experience">
        <SectionHeader
          sectionNumber="02"
          title="Experience and Skills"
          sentence={sentence}
          highlight={["What I Can Do"]} // optional
        />
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
