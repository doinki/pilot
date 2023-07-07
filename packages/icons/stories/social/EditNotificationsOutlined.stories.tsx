import type { Meta, StoryObj } from '@storybook/react';

import EditNotificationsOutlined from '../../lib/social/EditNotificationsOutlined';

const meta: Meta<typeof EditNotificationsOutlined> = {
  component: EditNotificationsOutlined,
  tags: ['autodocs'],
  title: 'social/EditNotificationsOutlined',
};

export default meta;
type Story = StoryObj<typeof EditNotificationsOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
