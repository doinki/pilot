import type { Meta, StoryObj } from '@storybook/react';

import MarginOutlined from '../../lib/editor/MarginOutlined';

const meta: Meta<typeof MarginOutlined> = {
  component: MarginOutlined,
  tags: ['autodocs'],
  title: 'editor/MarginOutlined',
};

export default meta;
type Story = StoryObj<typeof MarginOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
