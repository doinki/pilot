import type { Meta, StoryObj } from '@storybook/react';

import EighteenUpRatingOutlined from '../../lib/social/EighteenUpRatingOutlined';

const meta: Meta<typeof EighteenUpRatingOutlined> = {
  component: EighteenUpRatingOutlined,
  tags: ['autodocs'],
  title: 'social/EighteenUpRatingOutlined',
};

export default meta;
type Story = StoryObj<typeof EighteenUpRatingOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
