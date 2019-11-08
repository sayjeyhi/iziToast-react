import React from 'react'

import { useToast } from 'izitoast-react'

const App = () => {
  const showMessage = useToast({
    title: 'Hi',
    message: 'Message with fancy animation'
  });

  return (
    <div>
      <button onClick={showMessage} >Show</button>
    </div>
  )
};

export default App
