import type { Meta, StoryObj } from '@storybook/react';

import NotificationsOffOutlined from '../../lib/social/NotificationsOffOutlined';

const meta: Meta<typeof NotificationsOffOutlined> = {
  component: NotificationsOffOutlined,
  tags: ['autodocs'],
  title: 'social/NotificationsOffOutlined',
};

export default meta;
type Story = StoryObj<typeof NotificationsOffOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
