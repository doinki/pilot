import type { Meta, StoryObj } from '@storybook/react';

import TimerOffOutlined from '../../lib/image/TimerOffOutlined';

const meta: Meta<typeof TimerOffOutlined> = {
  component: TimerOffOutlined,
  tags: ['autodocs'],
  title: 'image/TimerOffOutlined',
};

export default meta;
type Story = StoryObj<typeof TimerOffOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
