import type { Meta, StoryObj } from '@storybook/react';

import BookOutlined from '../../lib/action/BookOutlined';

const meta: Meta<typeof BookOutlined> = {
  component: BookOutlined,
  tags: ['autodocs'],
  title: 'action/BookOutlined',
};

export default meta;
type Story = StoryObj<typeof BookOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
