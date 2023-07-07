import type { Meta, StoryObj } from '@storybook/react';

import ReplyOutlined from '../../lib/content/ReplyOutlined';

const meta: Meta<typeof ReplyOutlined> = {
  component: ReplyOutlined,
  tags: ['autodocs'],
  title: 'content/ReplyOutlined',
};

export default meta;
type Story = StoryObj<typeof ReplyOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
