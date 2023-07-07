import type { Meta, StoryObj } from '@storybook/react';

import DirectionsTransitFilledOutlined from '../../lib/maps/DirectionsTransitFilledOutlined';

const meta: Meta<typeof DirectionsTransitFilledOutlined> = {
  component: DirectionsTransitFilledOutlined,
  tags: ['autodocs'],
  title: 'maps/DirectionsTransitFilledOutlined',
};

export default meta;
type Story = StoryObj<typeof DirectionsTransitFilledOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
