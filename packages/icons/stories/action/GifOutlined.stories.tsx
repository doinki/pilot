import type { Meta, StoryObj } from '@storybook/react';

import GifOutlined from '../../lib/action/GifOutlined';

const meta: Meta<typeof GifOutlined> = {
  component: GifOutlined,
  tags: ['autodocs'],
  title: 'action/GifOutlined',
};

export default meta;
type Story = StoryObj<typeof GifOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
