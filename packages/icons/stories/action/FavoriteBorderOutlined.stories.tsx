import type { Meta, StoryObj } from '@storybook/react';

import FavoriteBorderOutlined from '../../lib/action/FavoriteBorderOutlined';

const meta: Meta<typeof FavoriteBorderOutlined> = {
  component: FavoriteBorderOutlined,
  tags: ['autodocs'],
  title: 'action/FavoriteBorderOutlined',
};

export default meta;
type Story = StoryObj<typeof FavoriteBorderOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
