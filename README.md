# izitoast-react

Elegant, responsive, flexible and lightweight notification plugin with no dependencies.

> A react wrapper for izitoast with react hooks

[![NPM](https://img.shields.io/npm/v/izitoast-react.svg)](https://www.npmjs.com/package/izitoast-react) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)


[logo]: http://i.imgur.com/hCYIhep.png "Check icon"
[new]: http://i.imgur.com/41zuVDk.png "New label"
[bug]: http://i.imgur.com/92lu4ln.png "Bug label"

Fast | Responsive | Animated | Lightweight | Customizable | No dependencies | Retina
:-----: | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: 
![alt text][logo] | ![alt text][logo] | ![alt text][logo] | ![alt text][logo] | ![alt text][logo] | ![alt text][logo] | ![alt text][logo]


- All modern browsers are supported (Tested in Chrome, Firefox, Opera, Safari, IE10+ and Edge).
- Bugs? create an issue [here](https://github.com/marcelodolza/iziToast/issues).


## Install

```bash
npm install --save izitoast-react
```

## Usage

```tsx
import * as React from 'react'

import { useToast, immediateToast } from 'izitoast-react'
import 'izitoast-react/dist/iziToast.css';

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
