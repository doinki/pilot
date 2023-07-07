import type { Meta, StoryObj } from '@storybook/react';

import ReviewsOutlined from '../../lib/device/ReviewsOutlined';

const meta: Meta<typeof ReviewsOutlined> = {
  component: ReviewsOutlined,
  tags: ['autodocs'],
  title: 'device/ReviewsOutlined',
};

export default meta;
type Story = StoryObj<typeof ReviewsOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
