import type { Meta, StoryObj } from '@storybook/react';

import RemoveModeratorOutlined from '../../lib/social/RemoveModeratorOutlined';

const meta: Meta<typeof RemoveModeratorOutlined> = {
  component: RemoveModeratorOutlined,
  tags: ['autodocs'],
  title: 'social/RemoveModeratorOutlined',
};

export default meta;
type Story = StoryObj<typeof RemoveModeratorOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
