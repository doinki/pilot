import type { Meta, StoryObj } from '@storybook/react';

import MusicVideoOutlined from '../../lib/av/MusicVideoOutlined';

const meta: Meta<typeof MusicVideoOutlined> = {
  component: MusicVideoOutlined,
  tags: ['autodocs'],
  title: 'av/MusicVideoOutlined',
};

export default meta;
type Story = StoryObj<typeof MusicVideoOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
