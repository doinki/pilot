import type { Meta, StoryObj } from '@storybook/react';

import FlightOutlined from '../../lib/maps/FlightOutlined';

const meta: Meta<typeof FlightOutlined> = {
  component: FlightOutlined,
  tags: ['autodocs'],
  title: 'maps/FlightOutlined',
};

export default meta;
type Story = StoryObj<typeof FlightOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
