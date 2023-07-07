import type { Meta, StoryObj } from '@storybook/react';

import GamesOutlined from '../../lib/av/GamesOutlined';

const meta: Meta<typeof GamesOutlined> = {
  component: GamesOutlined,
  tags: ['autodocs'],
  title: 'av/GamesOutlined',
};

export default meta;
type Story = StoryObj<typeof GamesOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
