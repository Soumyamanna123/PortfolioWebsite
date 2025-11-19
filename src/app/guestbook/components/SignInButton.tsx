import { User } from "lucide-react";

export const SignInButton = ({ onClick }: { onClick: () => void }) => {
  return (
    <button
      onClick={onClick}
      className="
        inline-flex items-center gap-2 px-6 py-3
        bg-gradient-to-r from-[#10B981] via-[#A3E635] to-[#C9E651]
        text-white font-semibold rounded-lg
        hover:from-[#0EA978] hover:via-[#98DB31] hover:to-[#BDD84A]
        transition-all duration-200 shadow-lg hover:shadow-xl
        transform hover:scale-105
      "
    >
      <User className="w-5 h-5" />
      Sign In to continue leaving a message
    </button>
  );
};
