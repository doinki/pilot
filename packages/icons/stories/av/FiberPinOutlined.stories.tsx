import type { Meta, StoryObj } from '@storybook/react';

import FiberPinOutlined from '../../lib/av/FiberPinOutlined';

const meta: Meta<typeof FiberPinOutlined> = {
  component: FiberPinOutlined,
  tags: ['autodocs'],
  title: 'av/FiberPinOutlined',
};

export default meta;
type Story = StoryObj<typeof FiberPinOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
