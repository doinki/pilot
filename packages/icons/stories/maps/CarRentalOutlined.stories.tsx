import type { Meta, StoryObj } from '@storybook/react';

import CarRentalOutlined from '../../lib/maps/CarRentalOutlined';

const meta: Meta<typeof CarRentalOutlined> = {
  component: CarRentalOutlined,
  tags: ['autodocs'],
  title: 'maps/CarRentalOutlined',
};

export default meta;
type Story = StoryObj<typeof CarRentalOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
