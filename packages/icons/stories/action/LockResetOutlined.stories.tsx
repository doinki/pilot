import type { Meta, StoryObj } from '@storybook/react';

import LockResetOutlined from '../../lib/action/LockResetOutlined';

const meta: Meta<typeof LockResetOutlined> = {
  component: LockResetOutlined,
  tags: ['autodocs'],
  title: 'action/LockResetOutlined',
};

export default meta;
type Story = StoryObj<typeof LockResetOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
