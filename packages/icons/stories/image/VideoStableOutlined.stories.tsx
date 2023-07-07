import type { Meta, StoryObj } from '@storybook/react';

import VideoStableOutlined from '../../lib/image/VideoStableOutlined';

const meta: Meta<typeof VideoStableOutlined> = {
  component: VideoStableOutlined,
  tags: ['autodocs'],
  title: 'image/VideoStableOutlined',
};

export default meta;
type Story = StoryObj<typeof VideoStableOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
