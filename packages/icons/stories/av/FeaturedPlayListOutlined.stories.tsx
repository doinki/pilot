import type { Meta, StoryObj } from '@storybook/react';

import FeaturedPlayListOutlined from '../../lib/av/FeaturedPlayListOutlined';

const meta: Meta<typeof FeaturedPlayListOutlined> = {
  component: FeaturedPlayListOutlined,
  tags: ['autodocs'],
  title: 'av/FeaturedPlayListOutlined',
};

export default meta;
type Story = StoryObj<typeof FeaturedPlayListOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
