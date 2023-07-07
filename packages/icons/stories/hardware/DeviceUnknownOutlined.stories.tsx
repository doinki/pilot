import type { Meta, StoryObj } from '@storybook/react';

import DeviceUnknownOutlined from '../../lib/hardware/DeviceUnknownOutlined';

const meta: Meta<typeof DeviceUnknownOutlined> = {
  component: DeviceUnknownOutlined,
  tags: ['autodocs'],
  title: 'hardware/DeviceUnknownOutlined',
};

export default meta;
type Story = StoryObj<typeof DeviceUnknownOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
