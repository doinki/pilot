import type { Meta, StoryObj } from '@storybook/react';

import TrendingFlatOutlined from '../../lib/action/TrendingFlatOutlined';

const meta: Meta<typeof TrendingFlatOutlined> = {
  component: TrendingFlatOutlined,
  tags: ['autodocs'],
  title: 'action/TrendingFlatOutlined',
};

export default meta;
type Story = StoryObj<typeof TrendingFlatOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
