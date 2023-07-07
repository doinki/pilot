import type { Meta, StoryObj } from '@storybook/react';

import TrendingUpOutlined from '../../lib/action/TrendingUpOutlined';

const meta: Meta<typeof TrendingUpOutlined> = {
  component: TrendingUpOutlined,
  tags: ['autodocs'],
  title: 'action/TrendingUpOutlined',
};

export default meta;
type Story = StoryObj<typeof TrendingUpOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
