import type { Meta, StoryObj } from '@storybook/react';

import CircleNotificationsOutlined from '../../lib/action/CircleNotificationsOutlined';

const meta: Meta<typeof CircleNotificationsOutlined> = {
  component: CircleNotificationsOutlined,
  tags: ['autodocs'],
  title: 'action/CircleNotificationsOutlined',
};

export default meta;
type Story = StoryObj<typeof CircleNotificationsOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
