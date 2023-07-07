import type { Meta, StoryObj } from '@storybook/react';

import VideoChatOutlined from '../../lib/notification/VideoChatOutlined';

const meta: Meta<typeof VideoChatOutlined> = {
  component: VideoChatOutlined,
  tags: ['autodocs'],
  title: 'notification/VideoChatOutlined',
};

export default meta;
type Story = StoryObj<typeof VideoChatOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
