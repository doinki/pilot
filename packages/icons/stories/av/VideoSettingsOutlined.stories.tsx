import type { Meta, StoryObj } from '@storybook/react';

import VideoSettingsOutlined from '../../lib/av/VideoSettingsOutlined';

const meta: Meta<typeof VideoSettingsOutlined> = {
  component: VideoSettingsOutlined,
  tags: ['autodocs'],
  title: 'av/VideoSettingsOutlined',
};

export default meta;
type Story = StoryObj<typeof VideoSettingsOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
