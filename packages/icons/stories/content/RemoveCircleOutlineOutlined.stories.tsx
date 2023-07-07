import type { Meta, StoryObj } from '@storybook/react';

import RemoveCircleOutlineOutlined from '../../lib/content/RemoveCircleOutlineOutlined';

const meta: Meta<typeof RemoveCircleOutlineOutlined> = {
  component: RemoveCircleOutlineOutlined,
  tags: ['autodocs'],
  title: 'content/RemoveCircleOutlineOutlined',
};

export default meta;
type Story = StoryObj<typeof RemoveCircleOutlineOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
