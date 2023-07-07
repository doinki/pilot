import type { Meta, StoryObj } from '@storybook/react';

import SendOutlined from '../../lib/content/SendOutlined';

const meta: Meta<typeof SendOutlined> = {
  component: SendOutlined,
  tags: ['autodocs'],
  title: 'content/SendOutlined',
};

export default meta;
type Story = StoryObj<typeof SendOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
