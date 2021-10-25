import React, {useEffect} from 'react'

import { useToast, immediateToast } from 'izitoast-react'
import 'izitoast-react/dist/iziToast.css';

const App = () => {
  const showMessage = useToast({
    title: 'Hi',
    message: 'Message with fancy animation'
  });

  useEffect(() => {
    immediateToast('info', {
      message: 'Hi, how it is going'
    })
  });

  return (
    <div>
      <button onClick={showMessage} >Show</button>
    </div>
  )
};

export default App
