import { Mail, MessageSquare } from "lucide-react";
import { EntryCard } from "./EntryCard";

export const EntryList = ({ entries }: { entries: GuestbookEntry[] }) => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-8">
      <div className="flex items-center gap-3 mb-6">
        <Mail className="w-6 h-6 text-purple-400" />
        <h2 className="text-2xl font-bold text-white">
          Messages ({entries.length})
        </h2>
      </div>
      
      <div className="space-y-4">
        {entries.map((entry) => (
          <EntryCard key={entry.id} entry={entry} />
        ))}
        
        {entries.length === 0 && (
          <div className="text-center py-12">
            <MessageSquare className="w-16 h-16 text-gray-600 mx-auto mb-4" />
            <p className="text-gray-400 text-lg">No messages yet. Be the first to sign!</p>
          </div>
        )}
      </div>
    </div>
  );
};