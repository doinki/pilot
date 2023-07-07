import type { Meta, StoryObj } from '@storybook/react';

import TimeToLeaveOutlined from '../../lib/notification/TimeToLeaveOutlined';

const meta: Meta<typeof TimeToLeaveOutlined> = {
  component: TimeToLeaveOutlined,
  tags: ['autodocs'],
  title: 'notification/TimeToLeaveOutlined',
};

export default meta;
type Story = StoryObj<typeof TimeToLeaveOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
