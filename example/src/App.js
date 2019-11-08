import React from 'react'

import { useToast } from 'izitoast-react'

const App = () => {
  const showMessage = useToast({
    title: 'Hi',
    message: 'شما با موفقیت وارد شدید',
    rtl: true,
  });

  return (
    <div>
      <button onClick={showMessage} >Show</button>
    </div>
  )
};

export default App
