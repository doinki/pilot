import type { Meta, StoryObj } from '@storybook/react';

import ErrorOutlineOutlined from '../../lib/alert/ErrorOutlineOutlined';

const meta: Meta<typeof ErrorOutlineOutlined> = {
  component: ErrorOutlineOutlined,
  tags: ['autodocs'],
  title: 'alert/ErrorOutlineOutlined',
};

export default meta;
type Story = StoryObj<typeof ErrorOutlineOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
