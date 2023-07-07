import type { Meta, StoryObj } from '@storybook/react';

import ToysOutlined from '../../lib/hardware/ToysOutlined';

const meta: Meta<typeof ToysOutlined> = {
  component: ToysOutlined,
  tags: ['autodocs'],
  title: 'hardware/ToysOutlined',
};

export default meta;
type Story = StoryObj<typeof ToysOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
