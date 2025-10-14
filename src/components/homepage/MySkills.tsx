
import { motion } from "framer-motion";
import MaxWidthWrapper from "../MaxWidthWrapper";
import SectionHeader from "../SectionHeader";
import Experience from "../Experience";
import Skills from "../Skills";

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
