import type { Meta, StoryObj } from '@storybook/react';

import VideoFileOutlined from '../../lib/av/VideoFileOutlined';

const meta: Meta<typeof VideoFileOutlined> = {
  component: VideoFileOutlined,
  tags: ['autodocs'],
  title: 'av/VideoFileOutlined',
};

export default meta;
type Story = StoryObj<typeof VideoFileOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
