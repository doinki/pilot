import type { Meta, StoryObj } from '@storybook/react';

import FlightTakeoffOutlined from '../../lib/action/FlightTakeoffOutlined';

const meta: Meta<typeof FlightTakeoffOutlined> = {
  component: FlightTakeoffOutlined,
  tags: ['autodocs'],
  title: 'action/FlightTakeoffOutlined',
};

export default meta;
type Story = StoryObj<typeof FlightTakeoffOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
