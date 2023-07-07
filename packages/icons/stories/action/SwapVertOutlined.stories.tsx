import type { Meta, StoryObj } from '@storybook/react';

import SwapVertOutlined from '../../lib/action/SwapVertOutlined';

const meta: Meta<typeof SwapVertOutlined> = {
  component: SwapVertOutlined,
  tags: ['autodocs'],
  title: 'action/SwapVertOutlined',
};

export default meta;
type Story = StoryObj<typeof SwapVertOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
