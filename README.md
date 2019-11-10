# izitoast-react

> A react wrapper for izitoast with react hooks

[![NPM](https://img.shields.io/npm/v/izitoast-react.svg)](https://www.npmjs.com/package/izitoast-react) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save izitoast-react
```

## Usage

```tsx
import * as React from 'react'

import { useToast, immediateToast } from 'izitoast-react'

const App = () => {
  const showMessage = useToast({
    message: 'Show my message :)',
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
```

Demo : [CodeSandbox](https://codesandbox.io/s/izi-toast-react-wrapper-ynrrn)

## License

React wrapper [sayjeyhi](https://github.com/sayjeyhi)
Apache-2.0 © [marcelodolza](https://github.com/marcelodolza)

---

This hook is created using [create-react-hook](https://github.com/hermanya/create-react-hook).
