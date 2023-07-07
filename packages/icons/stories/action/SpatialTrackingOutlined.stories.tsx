import type { Meta, StoryObj } from '@storybook/react';

import SpatialTrackingOutlined from '../../lib/action/SpatialTrackingOutlined';

const meta: Meta<typeof SpatialTrackingOutlined> = {
  component: SpatialTrackingOutlined,
  tags: ['autodocs'],
  title: 'action/SpatialTrackingOutlined',
};

export default meta;
type Story = StoryObj<typeof SpatialTrackingOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
