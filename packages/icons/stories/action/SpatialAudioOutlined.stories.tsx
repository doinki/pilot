import type { Meta, StoryObj } from '@storybook/react';

import SpatialAudioOutlined from '../../lib/action/SpatialAudioOutlined';

const meta: Meta<typeof SpatialAudioOutlined> = {
  component: SpatialAudioOutlined,
  tags: ['autodocs'],
  title: 'action/SpatialAudioOutlined',
};

export default meta;
type Story = StoryObj<typeof SpatialAudioOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
