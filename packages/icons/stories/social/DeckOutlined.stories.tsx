import type { Meta, StoryObj } from '@storybook/react';

import DeckOutlined from '../../lib/social/DeckOutlined';

const meta: Meta<typeof DeckOutlined> = {
  component: DeckOutlined,
  tags: ['autodocs'],
  title: 'social/DeckOutlined',
};

export default meta;
type Story = StoryObj<typeof DeckOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
