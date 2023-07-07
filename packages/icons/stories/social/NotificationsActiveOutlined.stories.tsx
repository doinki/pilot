import type { Meta, StoryObj } from '@storybook/react';

import NotificationsActiveOutlined from '../../lib/social/NotificationsActiveOutlined';

const meta: Meta<typeof NotificationsActiveOutlined> = {
  component: NotificationsActiveOutlined,
  tags: ['autodocs'],
  title: 'social/NotificationsActiveOutlined',
};

export default meta;
type Story = StoryObj<typeof NotificationsActiveOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
