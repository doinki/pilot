import type { Meta, StoryObj } from '@storybook/react';

import ElectricBoltOutlined from '../../lib/home/ElectricBoltOutlined';

const meta: Meta<typeof ElectricBoltOutlined> = {
  component: ElectricBoltOutlined,
  tags: ['autodocs'],
  title: 'home/ElectricBoltOutlined',
};

export default meta;
type Story = StoryObj<typeof ElectricBoltOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
