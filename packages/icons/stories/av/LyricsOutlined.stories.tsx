import type { Meta, StoryObj } from '@storybook/react';

import LyricsOutlined from '../../lib/av/LyricsOutlined';

const meta: Meta<typeof LyricsOutlined> = {
  component: LyricsOutlined,
  tags: ['autodocs'],
  title: 'av/LyricsOutlined',
};

export default meta;
type Story = StoryObj<typeof LyricsOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
