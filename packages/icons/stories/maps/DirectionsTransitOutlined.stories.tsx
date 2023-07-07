import type { Meta, StoryObj } from '@storybook/react';

import DirectionsTransitOutlined from '../../lib/maps/DirectionsTransitOutlined';

const meta: Meta<typeof DirectionsTransitOutlined> = {
  component: DirectionsTransitOutlined,
  tags: ['autodocs'],
  title: 'maps/DirectionsTransitOutlined',
};

export default meta;
type Story = StoryObj<typeof DirectionsTransitOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
