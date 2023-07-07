import type { Meta, StoryObj } from '@storybook/react';

import MouseOutlined from '../../lib/hardware/MouseOutlined';

const meta: Meta<typeof MouseOutlined> = {
  component: MouseOutlined,
  tags: ['autodocs'],
  title: 'hardware/MouseOutlined',
};

export default meta;
type Story = StoryObj<typeof MouseOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
