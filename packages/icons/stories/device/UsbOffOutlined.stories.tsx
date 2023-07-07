import type { Meta, StoryObj } from '@storybook/react';

import UsbOffOutlined from '../../lib/device/UsbOffOutlined';

const meta: Meta<typeof UsbOffOutlined> = {
  component: UsbOffOutlined,
  tags: ['autodocs'],
  title: 'device/UsbOffOutlined',
};

export default meta;
type Story = StoryObj<typeof UsbOffOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
