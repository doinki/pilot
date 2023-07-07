import type { Meta, StoryObj } from '@storybook/react';

import LockOutlined from '../../lib/action/LockOutlined';

const meta: Meta<typeof LockOutlined> = {
  component: LockOutlined,
  tags: ['autodocs'],
  title: 'action/LockOutlined',
};

export default meta;
type Story = StoryObj<typeof LockOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
