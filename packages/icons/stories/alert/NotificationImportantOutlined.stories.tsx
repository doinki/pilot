import type { Meta, StoryObj } from '@storybook/react';

import NotificationImportantOutlined from '../../lib/alert/NotificationImportantOutlined';

const meta: Meta<typeof NotificationImportantOutlined> = {
  component: NotificationImportantOutlined,
  tags: ['autodocs'],
  title: 'alert/NotificationImportantOutlined',
};

export default meta;
type Story = StoryObj<typeof NotificationImportantOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
