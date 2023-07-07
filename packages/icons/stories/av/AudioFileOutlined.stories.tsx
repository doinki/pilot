import type { Meta, StoryObj } from '@storybook/react';

import AudioFileOutlined from '../../lib/av/AudioFileOutlined';

const meta: Meta<typeof AudioFileOutlined> = {
  component: AudioFileOutlined,
  tags: ['autodocs'],
  title: 'av/AudioFileOutlined',
};

export default meta;
type Story = StoryObj<typeof AudioFileOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
