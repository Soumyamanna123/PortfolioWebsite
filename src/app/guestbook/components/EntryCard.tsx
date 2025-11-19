import { Calendar } from "lucide-react";

interface GuestbookEntry {
  id: string;
  name: string;
  message: string;
  avatar?: string;
  createdAt: string;
  isPinned: boolean;
}

export const EntryCard = ({ entry }: { entry: GuestbookEntry }) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMs / 3600000);
    const diffDays = Math.floor(diffMs / 86400000);

    if (diffMins < 60) return `about ${diffMins} mo ago`;
    if (diffHours < 24) return `about ${diffHours} mo ago`;
    return `about ${diffDays} mo ago`;
  };

  return (
    <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-purple-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10">
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0">
          <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
            {entry.name.charAt(0).toUpperCase()}
          </div>
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <h3 className="text-white font-semibold text-lg">{entry.name}</h3>
          </div>

          <p className="text-gray-400 text-sm mb-3 flex items-center gap-1">
            <Calendar className="w-3 h-3" />
            {formatDate(entry.createdAt)}
          </p>

          <p className="text-gray-300 leading-relaxed">{entry.message}</p>
        </div>
      </div>
    </div>
  );
};
