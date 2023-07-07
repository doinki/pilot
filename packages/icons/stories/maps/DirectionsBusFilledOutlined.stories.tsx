import type { Meta, StoryObj } from '@storybook/react';

import DirectionsBusFilledOutlined from '../../lib/maps/DirectionsBusFilledOutlined';

const meta: Meta<typeof DirectionsBusFilledOutlined> = {
  component: DirectionsBusFilledOutlined,
  tags: ['autodocs'],
  title: 'maps/DirectionsBusFilledOutlined',
};

export default meta;
type Story = StoryObj<typeof DirectionsBusFilledOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
