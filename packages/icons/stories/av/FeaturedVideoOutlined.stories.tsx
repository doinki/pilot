import type { Meta, StoryObj } from '@storybook/react';

import FeaturedVideoOutlined from '../../lib/av/FeaturedVideoOutlined';

const meta: Meta<typeof FeaturedVideoOutlined> = {
  component: FeaturedVideoOutlined,
  tags: ['autodocs'],
  title: 'av/FeaturedVideoOutlined',
};

export default meta;
type Story = StoryObj<typeof FeaturedVideoOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
