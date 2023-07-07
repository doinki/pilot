import type { Meta, StoryObj } from '@storybook/react';

import DeviceThermostatOutlined from '../../lib/device/DeviceThermostatOutlined';

const meta: Meta<typeof DeviceThermostatOutlined> = {
  component: DeviceThermostatOutlined,
  tags: ['autodocs'],
  title: 'device/DeviceThermostatOutlined',
};

export default meta;
type Story = StoryObj<typeof DeviceThermostatOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
