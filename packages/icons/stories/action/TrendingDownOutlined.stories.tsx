import type { Meta, StoryObj } from '@storybook/react';

import TrendingDownOutlined from '../../lib/action/TrendingDownOutlined';

const meta: Meta<typeof TrendingDownOutlined> = {
  component: TrendingDownOutlined,
  tags: ['autodocs'],
  title: 'action/TrendingDownOutlined',
};

export default meta;
type Story = StoryObj<typeof TrendingDownOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
