import type { Meta, StoryObj } from '@storybook/react';

import DirectionsRailwayOutlined from '../../lib/maps/DirectionsRailwayOutlined';

const meta: Meta<typeof DirectionsRailwayOutlined> = {
  component: DirectionsRailwayOutlined,
  tags: ['autodocs'],
  title: 'maps/DirectionsRailwayOutlined',
};

export default meta;
type Story = StoryObj<typeof DirectionsRailwayOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
