import type { Meta, StoryObj } from '@storybook/react';

import MovieOutlined from '../../lib/av/MovieOutlined';

const meta: Meta<typeof MovieOutlined> = {
  component: MovieOutlined,
  tags: ['autodocs'],
  title: 'av/MovieOutlined',
};

export default meta;
type Story = StoryObj<typeof MovieOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
