import type { Meta, StoryObj } from '@storybook/react';

import MedicationOutlined from '../../lib/device/MedicationOutlined';

const meta: Meta<typeof MedicationOutlined> = {
  component: MedicationOutlined,
  tags: ['autodocs'],
  title: 'device/MedicationOutlined',
};

export default meta;
type Story = StoryObj<typeof MedicationOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
