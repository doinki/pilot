import type { Meta, StoryObj } from '@storybook/react';

import CarRepairOutlined from '../../lib/maps/CarRepairOutlined';

const meta: Meta<typeof CarRepairOutlined> = {
  component: CarRepairOutlined,
  tags: ['autodocs'],
  title: 'maps/CarRepairOutlined',
};

export default meta;
type Story = StoryObj<typeof CarRepairOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
