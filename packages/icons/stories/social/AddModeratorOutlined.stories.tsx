import type { Meta, StoryObj } from '@storybook/react';

import AddModeratorOutlined from '../../lib/social/AddModeratorOutlined';

const meta: Meta<typeof AddModeratorOutlined> = {
  component: AddModeratorOutlined,
  tags: ['autodocs'],
  title: 'social/AddModeratorOutlined',
};

export default meta;
type Story = StoryObj<typeof AddModeratorOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
