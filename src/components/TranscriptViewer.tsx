'use client';

import { useState, useEffect } from 'react';

interface TranscriptViewerProps {
  transcript: string;
}

const TranscriptViewer = ({ transcript }: TranscriptViewerProps) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [highlightedTranscript, setHighlightedTranscript] = useState(transcript);

  useEffect(() => {
    if (searchTerm.trim() === '') {
      setHighlightedTranscript(transcript);
      return;
    }

    const regex = new RegExp(`(${searchTerm})`, 'gi');
    const highlighted = transcript.replace(regex, '<mark class="bg-yellow-200">$1</mark>');
    setHighlightedTranscript(highlighted);
  }, [searchTerm, transcript]);

  return (
    <div>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search in transcript..."
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-ted-blue-500"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div 
        className="prose max-w-none text-gray-700"
        dangerouslySetInnerHTML={{ __html: highlightedTranscript }}
      />
    </div>
  );
};

export default TranscriptViewer; 