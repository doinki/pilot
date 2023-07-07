import type { Meta, StoryObj } from '@storybook/react';

import DirectionsRailwayFilledOutlined from '../../lib/maps/DirectionsRailwayFilledOutlined';

const meta: Meta<typeof DirectionsRailwayFilledOutlined> = {
  component: DirectionsRailwayFilledOutlined,
  tags: ['autodocs'],
  title: 'maps/DirectionsRailwayFilledOutlined',
};

export default meta;
type Story = StoryObj<typeof DirectionsRailwayFilledOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
