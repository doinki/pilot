import type { Meta, StoryObj } from '@storybook/react';

import LeakAddOutlined from '../../lib/image/LeakAddOutlined';

const meta: Meta<typeof LeakAddOutlined> = {
  component: LeakAddOutlined,
  tags: ['autodocs'],
  title: 'image/LeakAddOutlined',
};

export default meta;
type Story = StoryObj<typeof LeakAddOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
