import type { Meta, StoryObj } from '@storybook/react';

import ElectricMeterOutlined from '../../lib/home/ElectricMeterOutlined';

const meta: Meta<typeof ElectricMeterOutlined> = {
  component: ElectricMeterOutlined,
  tags: ['autodocs'],
  title: 'home/ElectricMeterOutlined',
};

export default meta;
type Story = StoryObj<typeof ElectricMeterOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
