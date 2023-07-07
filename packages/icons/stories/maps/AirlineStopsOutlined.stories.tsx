import type { Meta, StoryObj } from '@storybook/react';

import AirlineStopsOutlined from '../../lib/maps/AirlineStopsOutlined';

const meta: Meta<typeof AirlineStopsOutlined> = {
  component: AirlineStopsOutlined,
  tags: ['autodocs'],
  title: 'maps/AirlineStopsOutlined',
};

export default meta;
type Story = StoryObj<typeof AirlineStopsOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
