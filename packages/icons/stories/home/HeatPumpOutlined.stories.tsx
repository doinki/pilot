import type { Meta, StoryObj } from '@storybook/react';

import HeatPumpOutlined from '../../lib/home/HeatPumpOutlined';

const meta: Meta<typeof HeatPumpOutlined> = {
  component: HeatPumpOutlined,
  tags: ['autodocs'],
  title: 'home/HeatPumpOutlined',
};

export default meta;
type Story = StoryObj<typeof HeatPumpOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
