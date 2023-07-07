import type { Meta, StoryObj } from '@storybook/react';

import VideoLabelOutlined from '../../lib/av/VideoLabelOutlined';

const meta: Meta<typeof VideoLabelOutlined> = {
  component: VideoLabelOutlined,
  tags: ['autodocs'],
  title: 'av/VideoLabelOutlined',
};

export default meta;
type Story = StoryObj<typeof VideoLabelOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
