import type { Meta, StoryObj } from '@storybook/react';

import AddReactionOutlined from '../../lib/social/AddReactionOutlined';

const meta: Meta<typeof AddReactionOutlined> = {
  component: AddReactionOutlined,
  tags: ['autodocs'],
  title: 'social/AddReactionOutlined',
};

export default meta;
type Story = StoryObj<typeof AddReactionOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
