import type { Meta, StoryObj } from '@storybook/react';

import DirectionsBoatOutlined from '../../lib/maps/DirectionsBoatOutlined';

const meta: Meta<typeof DirectionsBoatOutlined> = {
  component: DirectionsBoatOutlined,
  tags: ['autodocs'],
  title: 'maps/DirectionsBoatOutlined',
};

export default meta;
type Story = StoryObj<typeof DirectionsBoatOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
