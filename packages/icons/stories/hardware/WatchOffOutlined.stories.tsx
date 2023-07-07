import type { Meta, StoryObj } from '@storybook/react';

import WatchOffOutlined from '../../lib/hardware/WatchOffOutlined';

const meta: Meta<typeof WatchOffOutlined> = {
  component: WatchOffOutlined,
  tags: ['autodocs'],
  title: 'hardware/WatchOffOutlined',
};

export default meta;
type Story = StoryObj<typeof WatchOffOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
