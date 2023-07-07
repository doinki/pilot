import type { Meta, StoryObj } from '@storybook/react';

import PhonePausedOutlined from '../../lib/notification/PhonePausedOutlined';

const meta: Meta<typeof PhonePausedOutlined> = {
  component: PhonePausedOutlined,
  tags: ['autodocs'],
  title: 'notification/PhonePausedOutlined',
};

export default meta;
type Story = StoryObj<typeof PhonePausedOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
