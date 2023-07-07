import type { Meta, StoryObj } from '@storybook/react';

import TireRepairOutlined from '../../lib/maps/TireRepairOutlined';

const meta: Meta<typeof TireRepairOutlined> = {
  component: TireRepairOutlined,
  tags: ['autodocs'],
  title: 'maps/TireRepairOutlined',
};

export default meta;
type Story = StoryObj<typeof TireRepairOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
