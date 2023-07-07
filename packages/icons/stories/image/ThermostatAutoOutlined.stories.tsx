import type { Meta, StoryObj } from '@storybook/react';

import ThermostatAutoOutlined from '../../lib/image/ThermostatAutoOutlined';

const meta: Meta<typeof ThermostatAutoOutlined> = {
  component: ThermostatAutoOutlined,
  tags: ['autodocs'],
  title: 'image/ThermostatAutoOutlined',
};

export default meta;
type Story = StoryObj<typeof ThermostatAutoOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
