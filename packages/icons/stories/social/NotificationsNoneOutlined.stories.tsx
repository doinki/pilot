import type { Meta, StoryObj } from '@storybook/react';

import NotificationsNoneOutlined from '../../lib/social/NotificationsNoneOutlined';

const meta: Meta<typeof NotificationsNoneOutlined> = {
  component: NotificationsNoneOutlined,
  tags: ['autodocs'],
  title: 'social/NotificationsNoneOutlined',
};

export default meta;
type Story = StoryObj<typeof NotificationsNoneOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
