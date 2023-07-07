import type { Meta, StoryObj } from '@storybook/react';

import YoutubeSearchedForOutlined from '../../lib/action/YoutubeSearchedForOutlined';

const meta: Meta<typeof YoutubeSearchedForOutlined> = {
  component: YoutubeSearchedForOutlined,
  tags: ['autodocs'],
  title: 'action/YoutubeSearchedForOutlined',
};

export default meta;
type Story = StoryObj<typeof YoutubeSearchedForOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
