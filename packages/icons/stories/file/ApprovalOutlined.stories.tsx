import type { Meta, StoryObj } from '@storybook/react';

import ApprovalOutlined from '../../lib/file/ApprovalOutlined';

const meta: Meta<typeof ApprovalOutlined> = {
  component: ApprovalOutlined,
  tags: ['autodocs'],
  title: 'file/ApprovalOutlined',
};

export default meta;
type Story = StoryObj<typeof ApprovalOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
