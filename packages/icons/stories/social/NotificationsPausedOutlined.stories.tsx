import type { Meta, StoryObj } from '@storybook/react';

import NotificationsPausedOutlined from '../../lib/social/NotificationsPausedOutlined';

const meta: Meta<typeof NotificationsPausedOutlined> = {
  component: NotificationsPausedOutlined,
  tags: ['autodocs'],
  title: 'social/NotificationsPausedOutlined',
};

export default meta;
type Story = StoryObj<typeof NotificationsPausedOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
