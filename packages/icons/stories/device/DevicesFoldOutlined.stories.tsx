import type { Meta, StoryObj } from '@storybook/react';

import DevicesFoldOutlined from '../../lib/device/DevicesFoldOutlined';

const meta: Meta<typeof DevicesFoldOutlined> = {
  component: DevicesFoldOutlined,
  tags: ['autodocs'],
  title: 'device/DevicesFoldOutlined',
};

export default meta;
type Story = StoryObj<typeof DevicesFoldOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
