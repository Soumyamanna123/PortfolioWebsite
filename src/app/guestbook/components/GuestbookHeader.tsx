import { AuroraText } from "@/components/ui/aurora-text";
import Tag from "@/components/ui/Tag";

const GuestbookHeader = () => {
  return (
    <div className="relative z-10 max-w-4xl mx-auto text-center pt-10">
      <Tag>THE GUESTBOOK</Tag>

      <h1 className="text-5xl md:text-7xl font-bold mb-6  [font-family:var(--font-syne)]">
        <AuroraText
          colors={["#10B981", "#A3E635", "#C9E651"]}
          speed={1.2}
          className="text-5xl md:text-7xl font-bold"
        >
          Got a message?
        </AuroraText>

        <br />

        <span className="text-white text-md font-sans text-4xl">
          I'd love to hear from you!
        </span>
      </h1>

      <p className=" text-gray-300 max-w-2xl mx-auto">
        Sign my guestbook and share your idea. You can tell me anything here!
      </p>
    </div>
  );
};

export default GuestbookHeader;
