import type { Meta, StoryObj } from '@storybook/react';

import SatelliteOutlined from '../../lib/maps/SatelliteOutlined';

const meta: Meta<typeof SatelliteOutlined> = {
  component: SatelliteOutlined,
  tags: ['autodocs'],
  title: 'maps/SatelliteOutlined',
};

export default meta;
type Story = StoryObj<typeof SatelliteOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
