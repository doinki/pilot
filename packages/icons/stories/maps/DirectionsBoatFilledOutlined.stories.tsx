import type { Meta, StoryObj } from '@storybook/react';

import DirectionsBoatFilledOutlined from '../../lib/maps/DirectionsBoatFilledOutlined';

const meta: Meta<typeof DirectionsBoatFilledOutlined> = {
  component: DirectionsBoatFilledOutlined,
  tags: ['autodocs'],
  title: 'maps/DirectionsBoatFilledOutlined',
};

export default meta;
type Story = StoryObj<typeof DirectionsBoatFilledOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
