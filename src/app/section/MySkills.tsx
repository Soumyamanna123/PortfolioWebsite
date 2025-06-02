import Experience from "../components/Experience";
import MaxWidthWrapper from "../components/MaxWidthWrapper";
import Skills from "../components/Skills";


const SkillsSection = () => {
  return (
    <MaxWidthWrapper>
      <section className="py-16">
        <div className="flex items-center justify-left gap-4 mb-6">
          {/* <div className="w-24 h-[2px] bg-[linear-gradient(to_left,white_20%,transparent_100%)]"></div> */}
          <h2 className="text-xl font-semibold font-sans  text-left">
            My Experience{" "}
            <span className="text-[#C9E651] font-normal [font-family:var(--font-carattere)]">
              & Skills
            </span>
          </h2>
          <div className="w-24 h-[2px] bg-[linear-gradient(to_right,white_20%,transparent_100%)]"></div>
        </div>
        
        <div className="mx-auto flex flex-col md:flex-row gap-8">
  {/* Experience Section */}
  <div className="w-full md:w-1/2">
    <Experience />
  </div>

  {/* Skills Section - Sticky */}
  <div className="w-full md:w-1/2 md:sticky md:top-30 h-fit">
    <Skills />
  </div>
</div>
      </section>
    </MaxWidthWrapper>
  );
};

export default SkillsSection;