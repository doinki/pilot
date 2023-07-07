import type { Meta, StoryObj } from '@storybook/react';

import WhereToVoteOutlined from '../../lib/content/WhereToVoteOutlined';

const meta: Meta<typeof WhereToVoteOutlined> = {
  component: WhereToVoteOutlined,
  tags: ['autodocs'],
  title: 'content/WhereToVoteOutlined',
};

export default meta;
type Story = StoryObj<typeof WhereToVoteOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
