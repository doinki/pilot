import type { Meta, StoryObj } from '@storybook/react';

import DirectionsSubwayFilledOutlined from '../../lib/maps/DirectionsSubwayFilledOutlined';

const meta: Meta<typeof DirectionsSubwayFilledOutlined> = {
  component: DirectionsSubwayFilledOutlined,
  tags: ['autodocs'],
  title: 'maps/DirectionsSubwayFilledOutlined',
};

export default meta;
type Story = StoryObj<typeof DirectionsSubwayFilledOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
