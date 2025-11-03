'use client';

import { useState, useEffect, useMemo, useRef } from 'react';
import Fuse from 'fuse.js';
import { portfolioData, SearchableItem } from '@/app/constant/portfolio';
import Link from 'next/link';


interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<SearchableItem[]>(portfolioData);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const resultsRef = useRef<HTMLDivElement>(null);

  const fuseOptions = {
    keys: [
      { name: 'title', weight: 3 },
      { name: 'description', weight: 2 },
      { name: 'tags', weight: 2 }
    ],
    threshold: 0.4,
    includeScore: true,
    minMatchCharLength: 2,
    ignoreLocation: true
  };

  const fuse = useMemo(() => new Fuse(portfolioData, fuseOptions), []);

  useEffect(() => {
    if (searchQuery.trim() === '') {
      setSearchResults(portfolioData);
    } else {
      const results = fuse.search(searchQuery);
      setSearchResults(results.map(result => result.item));
    }
    setSelectedIndex(0);
  }, [searchQuery, fuse]);

  // Group results by type
  const groupedResults = useMemo(() => {
    const groups: Record<string, SearchableItem[]> = {};
    searchResults.forEach(item => {
      if (!groups[item.type]) {
        groups[item.type] = [];
      }
      groups[item.type].push(item);
    });
    return groups;
  }, [searchResults]);

  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus();
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex((prev) => Math.min(prev + 1, searchResults.length - 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex((prev) => Math.max(prev - 1, 0));
    } else if (e.key === 'Enter') {
      e.preventDefault();
      const selectedItem = searchResults[selectedIndex];
      if (selectedItem?.url) {
        window.location.href = selectedItem.url;
        onClose();
      }
    } else if (e.key === 'Escape') {
      onClose();
    }
  };

  useEffect(() => {
    const selectedElement = resultsRef.current?.children[selectedIndex] as HTMLElement;
    if (selectedElement) {
      selectedElement.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
    }
  }, [selectedIndex]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-[10vh] px-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative w-full max-w-2xl bg-[#1a1a1a] rounded-xl shadow-2xl border border-gray-800 overflow-hidden">
        {/* Search Input */}
        <div className="flex items-center gap-3 px-4 py-4 border-b border-gray-800">
          <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input
            ref={inputRef}
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Search"
            className="flex-1 bg-transparent text-gray-300 placeholder-gray-600 outline-none text-base"
          />
          <kbd className="px-2 py-1 text-xs font-medium text-gray-500 bg-gray-800 rounded cursor-pointer"
          onClick={onClose}>
            ESC
          </kbd>
        </div>

        {/* Results with Section Headers */}
        <div 
          ref={resultsRef}
          className="max-h-[60vh] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-transparent"
        >
          {searchResults.length > 0 ? (
            Object.entries(groupedResults).map(([type, items]) => (
              <div key={type}>
                {/* Section Header */}
                <div className="px-4 py-2 bg-[#151515] sticky top-0 z-10">
                  <p className="text-xs font-medium text-gray-500 uppercase tracking-wide">
                    {type === 'page' ? 'Navigation' : type === 'social' ? 'Social Links' : type}
                  </p>
                </div>

                {/* Items in this section */}
                {items.map((item) => {
                  const itemIndex = searchResults.indexOf(item);
                  return (
                    <Link
                      key={item.id}
                      href={item.url || '#'}
                      onClick={(e) => {
                        if (!item.url) e.preventDefault();
                        onClose();
                      }}
                      className={`flex items-start gap-3 px-4 py-3 cursor-pointer transition-colors ${
                        itemIndex === selectedIndex 
                          ? 'bg-gray-800/50' 
                          : 'hover:bg-gray-800/30'
                      }`}
                    >
                      {/* Icon */}
                      <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center bg-gray-800 rounded-lg text-xl">
                        {item.icon || '📄'}
                      </div>

                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2">
                          <h3 className="text-sm font-medium text-gray-200">
                            {item.title}
                          </h3>
                          {item.badge && (
                            <span className="px-2 py-0.5 text-xs font-medium bg-gray-700 text-gray-300 rounded">
                              {item.badge}
                            </span>
                          )}
                        </div>
                        <p className="text-xs text-gray-500 mt-0.5">
                          {item.description}
                        </p>
                      </div>
                    </Link>
                  );
                })}
              </div>
            ))
          ) : (
            <div className="px-4 py-12 text-center">
              <p className="text-gray-500">No results found</p>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between px-4 py-3 bg-[#151515] border-t border-gray-800">
          <div className="flex items-center gap-4 text-xs text-gray-500">
            {/* <div className="flex items-center gap-1">
              <kbd className="px-1.5 py-0.5 bg-gray-800 rounded text-gray-400">↑</kbd>
              <kbd className="px-1.5 py-0.5 bg-gray-800 rounded text-gray-400">↓</kbd>
              <span>navigate</span>
            </div>
            <div className="flex items-center gap-1">
              <kbd className="px-1.5 py-0.5 bg-gray-800 rounded text-gray-400">↵</kbd>
              <span>select</span>
            </div> */}
            <div className="flex items-center gap-1 cursor-pointer"
            onClick={onClose}>
              <kbd className="px-1.5 py-0.5 bg-gray-800 rounded text-gray-400">esc</kbd>
    
            </div>
          </div>
          
          {/* Social Icons */}
          <div className="flex items-center gap-3">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-300 transition-colors">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-300 transition-colors">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-300 transition-colors">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}