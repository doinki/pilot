import type { Meta, StoryObj } from '@storybook/react';

import SwapHorizontalCircleOutlined from '../../lib/action/SwapHorizontalCircleOutlined';

const meta: Meta<typeof SwapHorizontalCircleOutlined> = {
  component: SwapHorizontalCircleOutlined,
  tags: ['autodocs'],
  title: 'action/SwapHorizontalCircleOutlined',
};

export default meta;
type Story = StoryObj<typeof SwapHorizontalCircleOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
