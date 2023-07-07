import type { Meta, StoryObj } from '@storybook/react';

import CommitOutlined from '../../lib/action/CommitOutlined';

const meta: Meta<typeof CommitOutlined> = {
  component: CommitOutlined,
  tags: ['autodocs'],
  title: 'action/CommitOutlined',
};

export default meta;
type Story = StoryObj<typeof CommitOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
