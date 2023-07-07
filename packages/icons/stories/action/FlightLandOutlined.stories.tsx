import type { Meta, StoryObj } from '@storybook/react';

import FlightLandOutlined from '../../lib/action/FlightLandOutlined';

const meta: Meta<typeof FlightLandOutlined> = {
  component: FlightLandOutlined,
  tags: ['autodocs'],
  title: 'action/FlightLandOutlined',
};

export default meta;
type Story = StoryObj<typeof FlightLandOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
