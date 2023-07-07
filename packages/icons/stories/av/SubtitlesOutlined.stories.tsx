import type { Meta, StoryObj } from '@storybook/react';

import SubtitlesOutlined from '../../lib/av/SubtitlesOutlined';

const meta: Meta<typeof SubtitlesOutlined> = {
  component: SubtitlesOutlined,
  tags: ['autodocs'],
  title: 'av/SubtitlesOutlined',
};

export default meta;
type Story = StoryObj<typeof SubtitlesOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
