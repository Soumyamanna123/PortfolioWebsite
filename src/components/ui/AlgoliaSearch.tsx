// components/AlgoliaSearch.tsx
"use client"

import React, { useState, useEffect, useCallback, useRef } from 'react'
import algoliasearch from 'algoliasearch/lite'
import { useRouter } from 'next/navigation'

// Types
interface SearchResult {
  objectID: string
  title: string
  description?: string
  category?: string
  url: string
  image?: string
  tags?: string[]
}

// Initialize Algolia client
const searchClient = algoliasearch(
  process.env.NEXT_PUBLIC_ALGOLIA_APP_ID || '',
  process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_API_KEY || ''
)

const AlgoliaSearch: React.FC = () => {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState<SearchResult[]>([])
  const [isSearching, setIsSearching] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [selectedIndex, setSelectedIndex] = useState(0)
  const searchRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const router = useRouter()

  // Search function
  const performSearch = useCallback(async (searchQuery: string) => {
    if (!searchQuery.trim()) {
      setResults([])
      setIsOpen(false)
      return
    }

    setIsSearching(true)
    setIsOpen(true)

    try {
      const index = searchClient.initIndex('portfolio_content') // Your index name
      const { hits } = await index.search<SearchResult>(searchQuery, {
        hitsPerPage: 8,
        attributesToRetrieve: ['title', 'description', 'category', 'url', 'image', 'tags'],
        attributesToHighlight: ['title', 'description']
      })

      setResults(hits)
      setSelectedIndex(0)
    } catch (error) {
      console.error('Search error:', error)
      setResults([])
    } finally {
      setIsSearching(false)
    }
  }, [])

  // Debounced search
  useEffect(() => {
    const timer = setTimeout(() => {
      performSearch(query)
    }, 300)

    return () => clearTimeout(timer)
  }, [query, performSearch])

  // Click outside to close
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  // Keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!isOpen || results.length === 0) return

    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault()
        setSelectedIndex((prev) => (prev < results.length - 1 ? prev + 1 : 0))
        break
      case 'ArrowUp':
        e.preventDefault()
        setSelectedIndex((prev) => (prev > 0 ? prev - 1 : results.length - 1))
        break
      case 'Enter':
        e.preventDefault()
        if (results[selectedIndex]) {
          handleResultClick(results[selectedIndex])
        }
        break
      case 'Escape':
        setIsOpen(false)
        inputRef.current?.blur()
        break
    }
  }

  // Handle result selection
  const handleResultClick = (result: SearchResult) => {
    setIsOpen(false)
    setQuery('')
    router.push(result.url)
  }

  // Highlight search terms
  const highlightText = (text: string, highlight: string) => {
    if (!highlight.trim()) return text
    
    const regex = new RegExp(`(${highlight})`, 'gi')
    const parts = text.split(regex)
    
    return parts.map((part, index) => 
      regex.test(part) ? (
        <mark key={index} className="bg-yellow-200 text-gray-900">{part}</mark>
      ) : (
        <span key={index}>{part}</span>
      )
    )
  }

  return (
    <div ref={searchRef} className="relative w-full max-w-2xl">
      {/* Search Input */}
      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
          <svg
            className="h-5 w-5 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
        
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
          onFocus={() => query && setIsOpen(true)}
          placeholder="Search projects, blog posts, skills..."
          className="w-full rounded-lg border border-gray-300 bg-white py-3 pl-12 pr-12 text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        {/* Loading Spinner */}
        {isSearching && (
          <div className="absolute inset-y-0 right-0 flex items-center pr-4">
            <svg className="h-5 w-5 animate-spin text-blue-500" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
            </svg>
          </div>
        )}

        {/* Clear Button */}
        {query && !isSearching && (
          <button
            onClick={() => {
              setQuery('')
              setResults([])
              setIsOpen(false)
              inputRef.current?.focus()
            }}
            className="absolute inset-y-0 right-0 flex items-center pr-4 text-gray-400 hover:text-gray-600"
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        )}
      </div>

      {/* Search Results Dropdown */}
      {isOpen && query && (
        <div className="absolute z-50 mt-2 w-full rounded-lg border border-gray-200 bg-white shadow-xl">
          {results.length > 0 ? (
            <ul className="max-h-96 overflow-y-auto py-2">
              {results.map((result, index) => (
                <li key={result.objectID}>
                  <button
                    onClick={() => handleResultClick(result)}
                    className={`w-full px-4 py-3 text-left transition-colors ${
                      index === selectedIndex
                        ? 'bg-blue-50 border-l-4 border-blue-500'
                        : 'hover:bg-gray-50'
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      {/* Thumbnail */}
                      {result.image && (
                        <img
                          src={result.image}
                          alt={result.title}
                          className="h-12 w-12 flex-shrink-0 rounded object-cover"
                        />
                      )}
                      
                      <div className="flex-1 min-w-0">
                        {/* Category Badge */}
                        {result.category && (
                          <span className="inline-block rounded bg-blue-100 px-2 py-1 text-xs font-medium text-blue-800 mb-1">
                            {result.category}
                          </span>
                        )}
                        
                        {/* Title */}
                        <h3 className="text-sm font-semibold text-gray-900 truncate">
                          {highlightText(result.title, query)}
                        </h3>
                        
                        {/* Description */}
                        {result.description && (
                          <p className="mt-1 text-sm text-gray-600 line-clamp-2">
                            {highlightText(result.description, query)}
                          </p>
                        )}
                        
                        {/* Tags */}
                        {result.tags && result.tags.length > 0 && (
                          <div className="mt-2 flex flex-wrap gap-1">
                            {result.tags.slice(0, 3).map((tag, i) => (
                              <span key={i} className="rounded bg-gray-100 px-2 py-0.5 text-xs text-gray-600">
                                {tag}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </button>
                </li>
              ))}
            </ul>
          ) : (
            <div className="px-4 py-8 text-center">
              <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="mt-2 text-sm text-gray-500">No results found for "{query}"</p>
              <p className="mt-1 text-xs text-gray-400">Try different keywords</p>
            </div>
          )}

          {/* Footer */}
          <div className="border-t border-gray-200 bg-gray-50 px-4 py-2 text-center">
            <p className="text-xs text-gray-500">
              Press <kbd className="rounded bg-white px-2 py-1 font-mono text-gray-700 shadow">↑↓</kbd> to navigate,{' '}
              <kbd className="rounded bg-white px-2 py-1 font-mono text-gray-700 shadow">Enter</kbd> to select,{' '}
              <kbd className="rounded bg-white px-2 py-1 font-mono text-gray-700 shadow">Esc</kbd> to close
            </p>
          </div>
        </div>
      )}
    </div>
  )
}

export default AlgoliaSearch