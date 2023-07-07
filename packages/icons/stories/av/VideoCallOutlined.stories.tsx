import type { Meta, StoryObj } from '@storybook/react';

import VideoCallOutlined from '../../lib/av/VideoCallOutlined';

const meta: Meta<typeof VideoCallOutlined> = {
  component: VideoCallOutlined,
  tags: ['autodocs'],
  title: 'av/VideoCallOutlined',
};

export default meta;
type Story = StoryObj<typeof VideoCallOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
