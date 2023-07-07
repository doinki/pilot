import type { Meta, StoryObj } from '@storybook/react';

import DirectionsCarFilledOutlined from '../../lib/maps/DirectionsCarFilledOutlined';

const meta: Meta<typeof DirectionsCarFilledOutlined> = {
  component: DirectionsCarFilledOutlined,
  tags: ['autodocs'],
  title: 'maps/DirectionsCarFilledOutlined',
};

export default meta;
type Story = StoryObj<typeof DirectionsCarFilledOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
