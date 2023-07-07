import type { Meta, StoryObj } from '@storybook/react';

import DeviceHubOutlined from '../../lib/hardware/DeviceHubOutlined';

const meta: Meta<typeof DeviceHubOutlined> = {
  component: DeviceHubOutlined,
  tags: ['autodocs'],
  title: 'hardware/DeviceHubOutlined',
};

export default meta;
type Story = StoryObj<typeof DeviceHubOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
