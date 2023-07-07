import type { Meta, StoryObj } from '@storybook/react';

import MedicationLiquidOutlined from '../../lib/device/MedicationLiquidOutlined';

const meta: Meta<typeof MedicationLiquidOutlined> = {
  component: MedicationLiquidOutlined,
  tags: ['autodocs'],
  title: 'device/MedicationLiquidOutlined',
};

export default meta;
type Story = StoryObj<typeof MedicationLiquidOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
