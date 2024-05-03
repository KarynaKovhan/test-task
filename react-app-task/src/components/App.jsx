import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

const MyModal = ({ open, children, disableGlobalScroll, setOpen }) => {
  useEffect(() => {
    if (disableGlobalScroll && open) {
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [open, disableGlobalScroll]);

  if (!open) return null;

  return ReactDOM.createPortal(
    <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(0,0,0,0.5)' }}>
      <div style={{ background: 'white', padding: '20px', borderRadius: '5px', position: 'relative' }}>
      {children}
      <button onClick={() => setOpen(false)} style={{ position: 'absolute', top: '10px', right: '10px' }}>Close</button>
      </div>
    </div>,
    document.body
  );
};

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
      const cleanWord = word.replace(/[^\w\s]|_/g, "").toLowerCase();
      if (badWords.includes(cleanWord) && !visibleWords[word]) {
        return <span key={index} onClick={() => toggleVisibility(word)} style={{ cursor: 'pointer' }}>{'*'.repeat(word.length)}</span>;
      }
      return <span key={index} onClick={() => toggleVisibility(word)} style={{ cursor: 'pointer' }}>{word}</span>;
    }).reduce((prev, curr) => [prev, ' ', curr]);
  };

  return <div>{censorText(children)}</div>;
};

function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const badWords = ['test', 'somebadword'];
  const someText = 'Very long text who contains someBadWord and testWord';

  return (
    <div>
      <button onClick={() => setModalOpen(true)}>Open Modal</button>
      <MyModal open={modalOpen} disableGlobalScroll={true} setOpen={setModalOpen}>
        <h1>Тут може бути ваша реклама</h1>
      </MyModal>
      <h2>Below is the Censored Text:</h2>
      <CensoredText badWords={badWords}>{someText}</CensoredText>
    </div>
  );
}

export default App;
