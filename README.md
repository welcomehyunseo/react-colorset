# React Color Set

Simple and useful tools for react.

![window-frame](https://user-images.githubusercontent.com/92869725/155738829-bdba8bc8-c87a-4c26-a4b8-cde8f3de3661.png)

```js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createGlobalStyle } from 'styled-components';
import { dark, light, accent, Reset } from 'react-colorset';

const GlobalStyle = createGlobalStyle`
    body {
      background-color: ${dark.backgroundDefault};
    }
`;

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <Reset />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
```

# Installation

Installation is done using the npm install command:

```bash
$ npm install react-colorset
```

# Features

- Reset style
- Light color set
- Dark color set
- Accent color set

# Usage - reset style

All of reset css source are referenced the below. (Reference -> CSS Tools: Reset CSS)

```js
// example code
import App from './App';
import { Reset } from 'react-colorset';

ReactDOM.render(
  <React.StrictMode>
    <Reset />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
```

# Usage - dark color set

![example-dark](https://user-images.githubusercontent.com/92869725/155742204-ccf33f0b-0687-4d50-8063-f98a95c79aab.png)

```js
import styled from 'styled-components';
import { dark } from 'react-colorset';

const Wrapper = styled.div`
  width: 400px;
  height: 300px;

  background-color: ${dark.backgroundHighest};
`;
```

# Colors

| Variables of light theme    | Variables of dark theme     |
| --------------------------- | --------------------------- |
| backgroundRoot #EBECED      | backgroundRoot #0E1525      |
| backgroundDefault #FCFCFC   | backgroundDefault #1C2333   |
| backgroundHigher #F0F1F2    | backgroundHigher #2B3245    |
| backgroundHighest #E4E5E6   | backgroundHighest #3C445C   |
| backgroundOverlay #F0F1F2A0 | backgroundOverlay #0e1525A0 |
| foregroundDefault #07080A   | foregroundDefault #F5F9FC   |
| foregroundDimmer #3D4047    | foregroundDimmer #C2C8CC    |
| foregroundDimmest #5C5F66   | foregroundDimmest #9DA2A6   |
| outlineStrongest #74767A    | outlineStrongest #9195A1    |
| outlineStronger #98999C     | outlineStronger #828899     |
| outlineDefault #AFB1B3      | outlineDefault #70788C      |
| outlineDefault25 #AFB1B340  | outlineDefault25 #70788C40  |
| outlineDimmer #C0C3C4       | outlineDimmer #5F677A       |
| outlineDimmest #D2D4D6      | outlineDimmest #4E5569      |

## License

[MIT](LICENSE)

## Reference

[CSS Tools: Reset CSS](https://meyerweb.com/eric/tools/css/reset/)
