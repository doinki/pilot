import type { Meta, StoryObj } from '@storybook/react';

import RateReviewOutlined from '../../lib/maps/RateReviewOutlined';

const meta: Meta<typeof RateReviewOutlined> = {
  component: RateReviewOutlined,
  tags: ['autodocs'],
  title: 'maps/RateReviewOutlined',
};

export default meta;
type Story = StoryObj<typeof RateReviewOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
