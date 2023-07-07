import type { Meta, StoryObj } from '@storybook/react';

import FlightClassOutlined from '../../lib/maps/FlightClassOutlined';

const meta: Meta<typeof FlightClassOutlined> = {
  component: FlightClassOutlined,
  tags: ['autodocs'],
  title: 'maps/FlightClassOutlined',
};

export default meta;
type Story = StoryObj<typeof FlightClassOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
