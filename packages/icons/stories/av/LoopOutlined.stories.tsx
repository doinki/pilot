import type { Meta, StoryObj } from '@storybook/react';

import LoopOutlined from '../../lib/av/LoopOutlined';

const meta: Meta<typeof LoopOutlined> = {
  component: LoopOutlined,
  tags: ['autodocs'],
  title: 'av/LoopOutlined',
};

export default meta;
type Story = StoryObj<typeof LoopOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
