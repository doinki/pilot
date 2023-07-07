import type { Meta, StoryObj } from '@storybook/react';

import RectangleOutlined from '../../lib/editor/RectangleOutlined';

const meta: Meta<typeof RectangleOutlined> = {
  component: RectangleOutlined,
  tags: ['autodocs'],
  title: 'editor/RectangleOutlined',
};

export default meta;
type Story = StoryObj<typeof RectangleOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
