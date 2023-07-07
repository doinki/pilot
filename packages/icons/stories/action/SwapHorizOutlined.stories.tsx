import type { Meta, StoryObj } from '@storybook/react';

import SwapHorizOutlined from '../../lib/action/SwapHorizOutlined';

const meta: Meta<typeof SwapHorizOutlined> = {
  component: SwapHorizOutlined,
  tags: ['autodocs'],
  title: 'action/SwapHorizOutlined',
};

export default meta;
type Story = StoryObj<typeof SwapHorizOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
