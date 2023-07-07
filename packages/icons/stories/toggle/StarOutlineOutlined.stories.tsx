import type { Meta, StoryObj } from '@storybook/react';

import StarOutlineOutlined from '../../lib/toggle/StarOutlineOutlined';

const meta: Meta<typeof StarOutlineOutlined> = {
  component: StarOutlineOutlined,
  tags: ['autodocs'],
  title: 'toggle/StarOutlineOutlined',
};

export default meta;
type Story = StoryObj<typeof StarOutlineOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
