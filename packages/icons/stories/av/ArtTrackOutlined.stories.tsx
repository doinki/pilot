import type { Meta, StoryObj } from '@storybook/react';

import ArtTrackOutlined from '../../lib/av/ArtTrackOutlined';

const meta: Meta<typeof ArtTrackOutlined> = {
  component: ArtTrackOutlined,
  tags: ['autodocs'],
  title: 'av/ArtTrackOutlined',
};

export default meta;
type Story = StoryObj<typeof ArtTrackOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
