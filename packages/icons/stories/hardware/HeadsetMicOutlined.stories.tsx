import type { Meta, StoryObj } from '@storybook/react';

import HeadsetMicOutlined from '../../lib/hardware/HeadsetMicOutlined';

const meta: Meta<typeof HeadsetMicOutlined> = {
  component: HeadsetMicOutlined,
  tags: ['autodocs'],
  title: 'hardware/HeadsetMicOutlined',
};

export default meta;
type Story = StoryObj<typeof HeadsetMicOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
