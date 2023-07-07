import type { Meta, StoryObj } from '@storybook/react';

import AudiotrackOutlined from '../../lib/image/AudiotrackOutlined';

const meta: Meta<typeof AudiotrackOutlined> = {
  component: AudiotrackOutlined,
  tags: ['autodocs'],
  title: 'image/AudiotrackOutlined',
};

export default meta;
type Story = StoryObj<typeof AudiotrackOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
