import React from 'react';
import { Meta } from '@storybook/react';
import { light, Reset } from '../src';
import { Wrapper } from './components/wrapper';
import { Box } from './components/box';
import { ColorCard } from './components/color-card';

export default {
  title: 'Light Color Set',
} as Meta;

export const Background: React.FC = () => {
  return (
    <Wrapper>
      <Reset />
      <Box>
        <ColorCard style={{ backgroundColor: light.backgroundRoot }} />
        <span>Background</span>
        <span>Root</span>
      </Box>

      <Box>
        <ColorCard style={{ backgroundColor: light.backgroundDefault }} />
        <span>Background</span>
        <span>Default</span>
      </Box>

      <Box>
        <ColorCard style={{ backgroundColor: light.backgroundHigher }} />
        <span>Background</span>
        <span>Higher</span>
      </Box>

      <Box>
        <ColorCard style={{ backgroundColor: light.backgroundHighest }} />
        <span>Background</span>
        <span>Highest</span>
      </Box>

      <Box>
        <ColorCard style={{ backgroundColor: light.backgroundOverlay }} />
        <span>Background</span>
        <span>Overlay</span>
      </Box>
    </Wrapper>
  );
};

export const Foreground: React.FC = () => {
  return (
    <Wrapper>
      <Reset />
      <Box>
        <ColorCard style={{ backgroundColor: light.foregroundDefault }} />
        <span>Foreground</span>
        <span>Default</span>
      </Box>

      <Box>
        <ColorCard style={{ backgroundColor: light.foregroundDimmer }} />
        <span>Foreground</span>
        <span>Dimmer</span>
      </Box>

      <Box>
        <ColorCard style={{ backgroundColor: light.foregroundDimmest }} />
        <span>Foreground</span>
        <span>Dimmest</span>
      </Box>
    </Wrapper>
  );
};

export const Outline: React.FC = () => {
  return (
    <Wrapper>
      <Reset />
      <Box>
        <ColorCard style={{ backgroundColor: light.outlineStrongest }} />
        <span>Outline</span>
        <span>Strongest</span>
      </Box>

      <Box>
        <ColorCard style={{ backgroundColor: light.outlineStronger }} />
        <span>Outline</span>
        <span>Stronger</span>
      </Box>

      <Box>
        <ColorCard style={{ backgroundColor: light.outlineDefault }} />
        <span>Outline</span>
        <span>Default</span>
      </Box>
      <Box>
        <ColorCard style={{ backgroundColor: light.outlineDefault25 }} />
        <span>Outline</span>
        <span>Default25</span>
      </Box>
      <Box>
        <ColorCard style={{ backgroundColor: light.outlineDimmer }} />
        <span>Outline</span>
        <span>Dimmer</span>
      </Box>
      <Box>
        <ColorCard style={{ backgroundColor: light.outlineDimmest }} />
        <span>Outline</span>
        <span>Dimmest</span>
      </Box>
    </Wrapper>
  );
};
