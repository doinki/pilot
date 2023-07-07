import type { Meta, StoryObj } from '@storybook/react';

import DirectionsWalkOutlined from '../../lib/maps/DirectionsWalkOutlined';

const meta: Meta<typeof DirectionsWalkOutlined> = {
  component: DirectionsWalkOutlined,
  tags: ['autodocs'],
  title: 'maps/DirectionsWalkOutlined',
};

export default meta;
type Story = StoryObj<typeof DirectionsWalkOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
