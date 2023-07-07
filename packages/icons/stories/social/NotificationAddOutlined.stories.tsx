import type { Meta, StoryObj } from '@storybook/react';

import NotificationAddOutlined from '../../lib/social/NotificationAddOutlined';

const meta: Meta<typeof NotificationAddOutlined> = {
  component: NotificationAddOutlined,
  tags: ['autodocs'],
  title: 'social/NotificationAddOutlined',
};

export default meta;
type Story = StoryObj<typeof NotificationAddOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
