import type { Meta, StoryObj } from '@storybook/react';

import ChargingStationOutlined from '../../lib/places/ChargingStationOutlined';

const meta: Meta<typeof ChargingStationOutlined> = {
  component: ChargingStationOutlined,
  tags: ['autodocs'],
  title: 'places/ChargingStationOutlined',
};

export default meta;
type Story = StoryObj<typeof ChargingStationOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
