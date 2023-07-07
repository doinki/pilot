import type { Meta, StoryObj } from '@storybook/react';

import CommentBankOutlined from '../../lib/action/CommentBankOutlined';

const meta: Meta<typeof CommentBankOutlined> = {
  component: CommentBankOutlined,
  tags: ['autodocs'],
  title: 'action/CommentBankOutlined',
};

export default meta;
type Story = StoryObj<typeof CommentBankOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
