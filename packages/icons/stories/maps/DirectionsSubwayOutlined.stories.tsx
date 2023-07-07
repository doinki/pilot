import type { Meta, StoryObj } from '@storybook/react';

import DirectionsSubwayOutlined from '../../lib/maps/DirectionsSubwayOutlined';

const meta: Meta<typeof DirectionsSubwayOutlined> = {
  component: DirectionsSubwayOutlined,
  tags: ['autodocs'],
  title: 'maps/DirectionsSubwayOutlined',
};

export default meta;
type Story = StoryObj<typeof DirectionsSubwayOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
