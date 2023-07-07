import type { Meta, StoryObj } from '@storybook/react';

import SyncLockOutlined from '../../lib/notification/SyncLockOutlined';

const meta: Meta<typeof SyncLockOutlined> = {
  component: SyncLockOutlined,
  tags: ['autodocs'],
  title: 'notification/SyncLockOutlined',
};

export default meta;
type Story = StoryObj<typeof SyncLockOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
