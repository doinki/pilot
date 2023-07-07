import type { Meta, StoryObj } from '@storybook/react';

import FiberDvrOutlined from '../../lib/av/FiberDvrOutlined';

const meta: Meta<typeof FiberDvrOutlined> = {
  component: FiberDvrOutlined,
  tags: ['autodocs'],
  title: 'av/FiberDvrOutlined',
};

export default meta;
type Story = StoryObj<typeof FiberDvrOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
