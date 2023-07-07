import type { Meta, StoryObj } from '@storybook/react';

import ElectricMopedOutlined from '../../lib/maps/ElectricMopedOutlined';

const meta: Meta<typeof ElectricMopedOutlined> = {
  component: ElectricMopedOutlined,
  tags: ['autodocs'],
  title: 'maps/ElectricMopedOutlined',
};

export default meta;
type Story = StoryObj<typeof ElectricMopedOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
