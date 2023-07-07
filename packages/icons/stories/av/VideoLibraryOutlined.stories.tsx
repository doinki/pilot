import type { Meta, StoryObj } from '@storybook/react';

import VideoLibraryOutlined from '../../lib/av/VideoLibraryOutlined';

const meta: Meta<typeof VideoLibraryOutlined> = {
  component: VideoLibraryOutlined,
  tags: ['autodocs'],
  title: 'av/VideoLibraryOutlined',
};

export default meta;
type Story = StoryObj<typeof VideoLibraryOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
