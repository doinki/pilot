import type { Meta, StoryObj } from '@storybook/react';

import CheckCircleOutlineOutlined from '../../lib/action/CheckCircleOutlineOutlined';

const meta: Meta<typeof CheckCircleOutlineOutlined> = {
  component: CheckCircleOutlineOutlined,
  tags: ['autodocs'],
  title: 'action/CheckCircleOutlineOutlined',
};

export default meta;
type Story = StoryObj<typeof CheckCircleOutlineOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
