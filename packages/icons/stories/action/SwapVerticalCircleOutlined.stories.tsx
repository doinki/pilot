import type { Meta, StoryObj } from '@storybook/react';

import SwapVerticalCircleOutlined from '../../lib/action/SwapVerticalCircleOutlined';

const meta: Meta<typeof SwapVerticalCircleOutlined> = {
  component: SwapVerticalCircleOutlined,
  tags: ['autodocs'],
  title: 'action/SwapVerticalCircleOutlined',
};

export default meta;
type Story = StoryObj<typeof SwapVerticalCircleOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
