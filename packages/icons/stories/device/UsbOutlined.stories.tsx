import type { Meta, StoryObj } from '@storybook/react';

import UsbOutlined from '../../lib/device/UsbOutlined';

const meta: Meta<typeof UsbOutlined> = {
  component: UsbOutlined,
  tags: ['autodocs'],
  title: 'device/UsbOutlined',
};

export default meta;
type Story = StoryObj<typeof UsbOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
