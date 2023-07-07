import type { Meta, StoryObj } from '@storybook/react';

import NotificationsOutlined from '../../lib/social/NotificationsOutlined';

const meta: Meta<typeof NotificationsOutlined> = {
  component: NotificationsOutlined,
  tags: ['autodocs'],
  title: 'social/NotificationsOutlined',
};

export default meta;
type Story = StoryObj<typeof NotificationsOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
