import type { Meta, StoryObj } from '@storybook/react';

import FavoriteOutlined from '../../lib/action/FavoriteOutlined';

const meta: Meta<typeof FavoriteOutlined> = {
  component: FavoriteOutlined,
  tags: ['autodocs'],
  title: 'action/FavoriteOutlined',
};

export default meta;
type Story = StoryObj<typeof FavoriteOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
