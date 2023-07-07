import type { Meta, StoryObj } from '@storybook/react';

import GifBoxOutlined from '../../lib/action/GifBoxOutlined';

const meta: Meta<typeof GifBoxOutlined> = {
  component: GifBoxOutlined,
  tags: ['autodocs'],
  title: 'action/GifBoxOutlined',
};

export default meta;
type Story = StoryObj<typeof GifBoxOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
