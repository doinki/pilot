import type { Meta, StoryObj } from '@storybook/react';

import FeedOutlined from '../../lib/search/FeedOutlined';

const meta: Meta<typeof FeedOutlined> = {
  component: FeedOutlined,
  tags: ['autodocs'],
  title: 'search/FeedOutlined',
};

export default meta;
type Story = StoryObj<typeof FeedOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
