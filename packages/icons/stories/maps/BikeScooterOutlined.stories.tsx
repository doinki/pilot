import type { Meta, StoryObj } from '@storybook/react';

import BikeScooterOutlined from '../../lib/maps/BikeScooterOutlined';

const meta: Meta<typeof BikeScooterOutlined> = {
  component: BikeScooterOutlined,
  tags: ['autodocs'],
  title: 'maps/BikeScooterOutlined',
};

export default meta;
type Story = StoryObj<typeof BikeScooterOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
