import type { Meta, StoryObj } from '@storybook/react';

import RecyclingOutlined from '../../lib/social/RecyclingOutlined';

const meta: Meta<typeof RecyclingOutlined> = {
  component: RecyclingOutlined,
  tags: ['autodocs'],
  title: 'social/RecyclingOutlined',
};

export default meta;
type Story = StoryObj<typeof RecyclingOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
