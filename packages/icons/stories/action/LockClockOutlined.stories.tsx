import type { Meta, StoryObj } from '@storybook/react';

import LockClockOutlined from '../../lib/action/LockClockOutlined';

const meta: Meta<typeof LockClockOutlined> = {
  component: LockClockOutlined,
  tags: ['autodocs'],
  title: 'action/LockClockOutlined',
};

export default meta;
type Story = StoryObj<typeof LockClockOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
