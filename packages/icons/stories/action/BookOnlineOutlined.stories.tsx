import type { Meta, StoryObj } from '@storybook/react';

import BookOnlineOutlined from '../../lib/action/BookOnlineOutlined';

const meta: Meta<typeof BookOnlineOutlined> = {
  component: BookOnlineOutlined,
  tags: ['autodocs'],
  title: 'action/BookOnlineOutlined',
};

export default meta;
type Story = StoryObj<typeof BookOnlineOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
