import Tag from "@/components/ui/Tag";

const GuestbookHeader = () => {
  return (
    <div className="relative z-10 max-w-4xl mx-auto text-center pt-10">
      <Tag>THE GUESTBOOK</Tag>

      <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight [font-family:var(--font-syne)]">
        <span className="bg-gradient-to-r from-emerald-500 via-lime-400 to-[#C9E651] bg-clip-text text-transparent">
          Got a message?
        </span>
        <br />
        <span className="text-white text-md font-sans">
          I'd love to hear from you!
        </span>
      </h1>

      <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
        Sign my guestbook and share your idea. You can tell me anything here!
      </p>
    </div>
  );
};

export default GuestbookHeader;
