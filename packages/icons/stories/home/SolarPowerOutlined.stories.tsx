import type { Meta, StoryObj } from '@storybook/react';

import SolarPowerOutlined from '../../lib/home/SolarPowerOutlined';

const meta: Meta<typeof SolarPowerOutlined> = {
  component: SolarPowerOutlined,
  tags: ['autodocs'],
  title: 'home/SolarPowerOutlined',
};

export default meta;
type Story = StoryObj<typeof SolarPowerOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
