# izitoast-react

> A react wrapper for izitoast

[![NPM](https://img.shields.io/npm/v/izitoast-react.svg)](https://www.npmjs.com/package/izitoast-react) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save izitoast-react
```

## Usage

```tsx
import * as React from 'react'

import { useToast } from 'izitoast-react'

const App = () => {
  const showMessage = useToast({
    message: 'Show my message :)',
  });

  return (
    <div>
      <button onClick={showMessage} >Show</button>
    </div>
  )
};
```

## License

React wrapper [sayjeyhi](https://github.com/sayjeyhi)
Apache-2.0 © [marcelodolza](https://github.com/marcelodolza)

---

This hook is created using [create-react-hook](https://github.com/hermanya/create-react-hook).
