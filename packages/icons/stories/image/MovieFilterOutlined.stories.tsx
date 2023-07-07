import type { Meta, StoryObj } from '@storybook/react';

import MovieFilterOutlined from '../../lib/image/MovieFilterOutlined';

const meta: Meta<typeof MovieFilterOutlined> = {
  component: MovieFilterOutlined,
  tags: ['autodocs'],
  title: 'image/MovieFilterOutlined',
};

export default meta;
type Story = StoryObj<typeof MovieFilterOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
