import type { Meta, StoryObj } from '@storybook/react';

import RecentActorsOutlined from '../../lib/av/RecentActorsOutlined';

const meta: Meta<typeof RecentActorsOutlined> = {
  component: RecentActorsOutlined,
  tags: ['autodocs'],
  title: 'av/RecentActorsOutlined',
};

export default meta;
type Story = StoryObj<typeof RecentActorsOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
