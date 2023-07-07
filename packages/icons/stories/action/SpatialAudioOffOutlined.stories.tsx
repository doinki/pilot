import type { Meta, StoryObj } from '@storybook/react';

import SpatialAudioOffOutlined from '../../lib/action/SpatialAudioOffOutlined';

const meta: Meta<typeof SpatialAudioOffOutlined> = {
  component: SpatialAudioOffOutlined,
  tags: ['autodocs'],
  title: 'action/SpatialAudioOffOutlined',
};

export default meta;
type Story = StoryObj<typeof SpatialAudioOffOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
