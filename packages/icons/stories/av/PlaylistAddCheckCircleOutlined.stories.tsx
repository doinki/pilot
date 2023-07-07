import type { Meta, StoryObj } from '@storybook/react';

import PlaylistAddCheckCircleOutlined from '../../lib/av/PlaylistAddCheckCircleOutlined';

const meta: Meta<typeof PlaylistAddCheckCircleOutlined> = {
  component: PlaylistAddCheckCircleOutlined,
  tags: ['autodocs'],
  title: 'av/PlaylistAddCheckCircleOutlined',
};

export default meta;
type Story = StoryObj<typeof PlaylistAddCheckCircleOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
