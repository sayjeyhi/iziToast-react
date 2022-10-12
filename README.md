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


Demo : [CodeSandbox](https://codesandbox.io/s/izi-toast-react-wrapper-ynrrn)


## Install

```bash
npm install --save izitoast-react
```

## Usage

```tsx
import React, { useEffect } from "react";

// Import these items
import { useToast, immediateToast } from "izitoast-react";
import "izitoast-react/dist/iziToast.css";

const App = () => {
  const showMessage = useToast({
    title: "Test",
    message: "Show my message :)",
    theme: "light",
    icon: "warn"
  });

  useEffect(() => {
    immediateToast("info", {
      message: "Hi, how it is going",
      timeout: 500000
    });
  });

  return (
    <div>
      <button onClick={showMessage}>Show</button>
    </div>
  );
};
```

## Options: 

```
{
  id: null, 
  class: '',
  title: '',
  titleColor: '',
  titleSize: '',
  titleLineHeight: '',
  message: '',
  messageColor: '',
  messageSize: '',
  messageLineHeight: '',
  backgroundColor: '',
  theme: 'light', // dark
  color: '', // blue, red, green, yellow
  icon: '',
  iconText: '',
  iconColor: '',
  iconUrl: null,
  image: '',
  imageWidth: 50,
  maxWidth: null,
  zindex: null,
  layout: 1,
  balloon: false,
  close: true,
  closeOnEscape: false,
  closeOnClick: false,
  displayMode: 0, // once, replace
  position: 'bottomRight', // bottomRight, bottomLeft, topRight, topLeft, topCenter, bottomCenter, center
  target: '',
  targetFirst: true,
  timeout: 5000,
  rtl: false,
  animateInside: true,
  drag: true,
  pauseOnHover: true,
  resetOnHover: false,
  progressBar: true,
  progressBarColor: '',
  progressBarEasing: 'linear',
  overlay: false,
  overlayClose: false,
  overlayColor: 'rgba(0, 0, 0, 0.6)',
  transitionIn: 'fadeInUp',
  transitionOut: 'fadeOut',
  transitionInMobile: 'fadeInUp',
  transitionOutMobile: 'fadeOutDown',
  buttons: {},
  inputs: {},
  onOpening: function () {},
  onOpened: function () {},
  onClosing: function () {},
  onClosed: function () {}
}
```

ARGUMENT | DEFAULT VALUE | DESCRIPTION
--- | --- | ---
| class | '' | The class that will be applied to the toast. It may be used as a reference.
title | '' | Title of the toast.
titleColor | '' | Title color.
titleSize | '' | Title fontSize.
titleLineHeight | '' | Title lineHeight.
message | '' | Message of notification.
messageColor | '' | Message color.
messageSize | '' | Message fontSize.
messageLineHeight | '' | Message lineHeight.
backgroundColor | '' | Background color of the Toast
theme | '' | It can be light or dark or set another class. Create and use like this ".iziToast-theme-name"
color | '' | It can be #hexadecimal, pre-defined themes like blue, red, green and yellow or set another class. Create and use like this ".iziToast-color-name"
icon | '' | Icon class (font-icon of your choice, Icomoon, Fontawesome etc.).
iconText | '' | Icon text (font-icon using text, Material Icons, etc.).
iconColor | '' | Icon color.
iconUrl | null | Address of file to be loaded. |
image | '' | Cover image. |
imageWidth | 50 | Width of cover image. | 100px
maxWidth | null | set maxWidth of toast. | 500px
zindex | 99999 | The z-index CSS attribute of the toast
layout | 1 | | Small e | Medium. It can be 1 or 2, or use another layout, creating the class like this: ".iziToast-layout3"
balloon | false | Applies a balloon like toast. |.
close | true | Show "x" close button
closeOnEscape | false | Allows to close toast using the Esc key.
closeOnClick | false | Allows to close toast clicking on it.
rtl | false | RTL option
position | 'bottomRight' | Where it will be shown. It can be bottomRight, bottomLeft, topRight, topLeft, topCenter, bottomCenter or center.
target | '' | Fixed place where you want to show the toasts. |
targetFirst | true | Add toast to first position.
toastOnce DEPRECIATED | false | Waits for another toast to be closed on 'onClosed' function. You'll need an ID to use it.
displayMode | 0 | - Waits until the toast is closed so you can open it (Use 1 or 'once'). - Replaces the toast that was already open (Use 2 or 'replace').
timeout | 5000 | Amount in milliseconds to close the toast or false to disable.
drag | true | Drag Feature. Is used to close the toast.
pauseOnHover | true | Pause the toast timeout while the cursor is on it. |
resetOnHover | false | Reset the toast timeout while the cursor is on it. |
progressBar | true | Enable timeout progress bar.
progressBarColor | '' | Progress bar color.
progressBarEasing | 'linear' | Animation Easing of progress bar.
overlay | false | Enables display the Overlay layer on the page.
overlayClose | false | Allows to close toast clicking on the Overlay.
overlayColor | 'rgba(0, 0, 0, 0.6)' | Overlay background color.
animateInside | true | Enable animations of elements in the toast. | True and | False.
buttons | {} | You can specify an array of buttons. |
inputs | {} | You can specify an array of inputs. |
transitionIn | 'fadeInUp' | Default toast open animation. It can be: bounceInLeft, bounceInRight, bounceInUp, bounceInDown, fadeIn, fadeInDown, fadeInUp, fadeInLeft, fadeInRight or flipInX.
transitionOut | 'fadeOut' | Default toast close animation. It can be: fadeOut, fadeOutUp, fadeOutDown, fadeOutLeft, fadeOutRight, flipOutX
transitionInMobile | 'fadeInUp' | Default toast opening mobile transition.
transitionOutMobile | 'fadeOutDown' | Default toast closing mobile transition.
onOpening | function() {} | Callback function triggered when opening the toast.
onOpened | function() {} | Callback function triggered when onOpened the toast.
onClosing | function() {} | Callback function triggered when closing the toast.
onClosed | function() {} | Callback function triggered when closed the toast.


Demo : [CodeSandbox](https://codesandbox.io/s/izi-toast-react-wrapper-ynrrn)

## License

React wrapper [sayjeyhi](https://github.com/sayjeyhi)
Apache-2.0 © [marcelodolza](https://github.com/marcelodolza)

---

This hook is created using [create-react-hook](https://github.com/hermanya/create-react-hook).
