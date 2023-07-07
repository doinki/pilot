import type { Meta, StoryObj } from '@storybook/react';

import TimerOutlined from '../../lib/image/TimerOutlined';

const meta: Meta<typeof TimerOutlined> = {
  component: TimerOutlined,
  tags: ['autodocs'],
  title: 'image/TimerOutlined',
};

export default meta;
type Story = StoryObj<typeof TimerOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
