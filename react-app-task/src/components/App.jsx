import React, { useState } from 'react';
import MyModal from './Task1_MyModal/MyModal';

function App() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button onClick={() => setOpen(true)}>Open Modal</button>
      <MyModal open={open} disableGlobalScroll={true} setOpen={setOpen}>
        <div>
          <h1>Тут може бути ваша реклама</h1>
          <button onClick={() => setOpen(false)}>Close</button>
        </div>
      </MyModal>
    </>
  );
}

export default App;
