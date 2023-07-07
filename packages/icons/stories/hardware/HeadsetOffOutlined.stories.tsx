import type { Meta, StoryObj } from '@storybook/react';

import HeadsetOffOutlined from '../../lib/hardware/HeadsetOffOutlined';

const meta: Meta<typeof HeadsetOffOutlined> = {
  component: HeadsetOffOutlined,
  tags: ['autodocs'],
  title: 'hardware/HeadsetOffOutlined',
};

export default meta;
type Story = StoryObj<typeof HeadsetOffOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
