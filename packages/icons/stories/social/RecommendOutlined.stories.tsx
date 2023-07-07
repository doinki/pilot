import type { Meta, StoryObj } from '@storybook/react';

import RecommendOutlined from '../../lib/social/RecommendOutlined';

const meta: Meta<typeof RecommendOutlined> = {
  component: RecommendOutlined,
  tags: ['autodocs'],
  title: 'social/RecommendOutlined',
};

export default meta;
type Story = StoryObj<typeof RecommendOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
