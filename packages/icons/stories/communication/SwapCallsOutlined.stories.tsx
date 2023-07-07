import type { Meta, StoryObj } from '@storybook/react';

import SwapCallsOutlined from '../../lib/communication/SwapCallsOutlined';

const meta: Meta<typeof SwapCallsOutlined> = {
  component: SwapCallsOutlined,
  tags: ['autodocs'],
  title: 'communication/SwapCallsOutlined',
};

export default meta;
type Story = StoryObj<typeof SwapCallsOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
