import type { Meta, StoryObj } from '@storybook/react';

import FollowTheSignsOutlined from '../../lib/social/FollowTheSignsOutlined';

const meta: Meta<typeof FollowTheSignsOutlined> = {
  component: FollowTheSignsOutlined,
  tags: ['autodocs'],
  title: 'social/FollowTheSignsOutlined',
};

export default meta;
type Story = StoryObj<typeof FollowTheSignsOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
