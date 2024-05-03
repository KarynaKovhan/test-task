import React, { useState } from 'react';

const CensoredText = ({ badWords, children }) => {
  const [visibleWords, setVisibleWords] = useState({});

  const toggleVisibility = (word) => {
    setVisibleWords((prev) => ({
      ...prev,
      [word]: !prev[word]
    }));
  };

  const censorText = (text) => {
    return text.split(/\s+/).map((word, index) => {
      const cleanWord = word.replace(/[^\w\s]|_/g, "").toLowerCase(); // Remove punctuation for accurate matching
      if (badWords.includes(cleanWord) && !visibleWords[word]) {
        return (
          <span key={index} onClick={() => toggleVisibility(word)} style={{ cursor: 'pointer' }}>
            {'*'.repeat(word.length)}
          </span>
        );
      }
      return (
        <span key={index} onClick={() => toggleVisibility(word)} style={{ cursor: 'pointer' }}>
          {word}
        </span>
      );
    }).reduce((prev, curr) => [prev, ' ', curr]);
  };

  return <div>{censorText(children)}</div>;
};

export default CensoredText;
