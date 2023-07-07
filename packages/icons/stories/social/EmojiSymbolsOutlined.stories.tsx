import type { Meta, StoryObj } from '@storybook/react';

import EmojiSymbolsOutlined from '../../lib/social/EmojiSymbolsOutlined';

const meta: Meta<typeof EmojiSymbolsOutlined> = {
  component: EmojiSymbolsOutlined,
  tags: ['autodocs'],
  title: 'social/EmojiSymbolsOutlined',
};

export default meta;
type Story = StoryObj<typeof EmojiSymbolsOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
