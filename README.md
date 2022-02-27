# React Color Set

Simple and useful tools for react.

![window-frame](https://user-images.githubusercontent.com/92869725/155738829-bdba8bc8-c87a-4c26-a4b8-cde8f3de3661.png)

```js
//..
import { createGlobalStyle } from 'styled-components';
import { dark, light, accent, Reset, reset } from 'react-colorset';

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

# Reset style

All of reset css source are referenced the below. (Reference -> CSS Tools: Reset CSS)

```js
// component way
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

```js
// css way
import App from './App';
import { reset } from 'react-colorset';

const GlobalStyle = createGlobalStyle`
  ${reset}
  
  /* other styles */
`;

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
```

# Light color set

![light-colorset](https://user-images.githubusercontent.com/92869725/155876307-ee05d729-ab48-42a1-9f25-2a35a333e9d0.png)

```js
import styled from 'styled-components';
import { light } from 'react-colorset';

const Wrapper = styled.div`
  background-color: ${light.backgroundRoot};

  /* other styles */
`;
```

# Dark color set

![example-dark](https://user-images.githubusercontent.com/92869725/155742204-ccf33f0b-0687-4d50-8063-f98a95c79aab.png)

```js
import styled from 'styled-components';
import { dark } from 'react-colorset';

const Wrapper = styled.div`
  background-color: ${dark.backgroundHighest};

  /* other styles */
`;
```

# Accent color set

## License

[MIT](LICENSE)

## Reference

[CSS Tools: Reset CSS](https://meyerweb.com/eric/tools/css/reset/)
