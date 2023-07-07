import type { Meta, StoryObj } from '@storybook/react';

import ElectricBikeOutlined from '../../lib/maps/ElectricBikeOutlined';

const meta: Meta<typeof ElectricBikeOutlined> = {
  component: ElectricBikeOutlined,
  tags: ['autodocs'],
  title: 'maps/ElectricBikeOutlined',
};

export default meta;
type Story = StoryObj<typeof ElectricBikeOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
