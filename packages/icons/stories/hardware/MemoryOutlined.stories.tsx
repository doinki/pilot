import type { Meta, StoryObj } from '@storybook/react';

import MemoryOutlined from '../../lib/hardware/MemoryOutlined';

const meta: Meta<typeof MemoryOutlined> = {
  component: MemoryOutlined,
  tags: ['autodocs'],
  title: 'hardware/MemoryOutlined',
};

export default meta;
type Story = StoryObj<typeof MemoryOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
