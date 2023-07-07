import type { Meta, StoryObj } from '@storybook/react';

import SlowMotionVideoOutlined from '../../lib/av/SlowMotionVideoOutlined';

const meta: Meta<typeof SlowMotionVideoOutlined> = {
  component: SlowMotionVideoOutlined,
  tags: ['autodocs'],
  title: 'av/SlowMotionVideoOutlined',
};

export default meta;
type Story = StoryObj<typeof SlowMotionVideoOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
