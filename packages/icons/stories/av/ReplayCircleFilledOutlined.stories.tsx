import type { Meta, StoryObj } from '@storybook/react';

import ReplayCircleFilledOutlined from '../../lib/av/ReplayCircleFilledOutlined';

const meta: Meta<typeof ReplayCircleFilledOutlined> = {
  component: ReplayCircleFilledOutlined,
  tags: ['autodocs'],
  title: 'av/ReplayCircleFilledOutlined',
};

export default meta;
type Story = StoryObj<typeof ReplayCircleFilledOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
