import type { Meta, StoryObj } from '@storybook/react';

import ThermostatOutlined from '../../lib/device/ThermostatOutlined';

const meta: Meta<typeof ThermostatOutlined> = {
  component: ThermostatOutlined,
  tags: ['autodocs'],
  title: 'device/ThermostatOutlined',
};

export default meta;
type Story = StoryObj<typeof ThermostatOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
