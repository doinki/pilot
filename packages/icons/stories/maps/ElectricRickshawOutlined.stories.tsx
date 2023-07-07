import type { Meta, StoryObj } from '@storybook/react';

import ElectricRickshawOutlined from '../../lib/maps/ElectricRickshawOutlined';

const meta: Meta<typeof ElectricRickshawOutlined> = {
  component: ElectricRickshawOutlined,
  tags: ['autodocs'],
  title: 'maps/ElectricRickshawOutlined',
};

export default meta;
type Story = StoryObj<typeof ElectricRickshawOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
