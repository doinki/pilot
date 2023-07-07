import type { Meta, StoryObj } from '@storybook/react';

import GestureOutlined from '../../lib/content/GestureOutlined';

const meta: Meta<typeof GestureOutlined> = {
  component: GestureOutlined,
  tags: ['autodocs'],
  title: 'content/GestureOutlined',
};

export default meta;
type Story = StoryObj<typeof GestureOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
