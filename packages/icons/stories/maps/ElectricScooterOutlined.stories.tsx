import type { Meta, StoryObj } from '@storybook/react';

import ElectricScooterOutlined from '../../lib/maps/ElectricScooterOutlined';

const meta: Meta<typeof ElectricScooterOutlined> = {
  component: ElectricScooterOutlined,
  tags: ['autodocs'],
  title: 'maps/ElectricScooterOutlined',
};

export default meta;
type Story = StoryObj<typeof ElectricScooterOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
