import type { Meta, StoryObj } from '@storybook/react';

import AddCircleOutlineOutlined from '../../lib/content/AddCircleOutlineOutlined';

const meta: Meta<typeof AddCircleOutlineOutlined> = {
  component: AddCircleOutlineOutlined,
  tags: ['autodocs'],
  title: 'content/AddCircleOutlineOutlined',
};

export default meta;
type Story = StoryObj<typeof AddCircleOutlineOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
