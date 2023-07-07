import type { Meta, StoryObj } from '@storybook/react';

import SwipeDownOutlined from '../../lib/action/SwipeDownOutlined';

const meta: Meta<typeof SwipeDownOutlined> = {
  component: SwipeDownOutlined,
  tags: ['autodocs'],
  title: 'action/SwipeDownOutlined',
};

export default meta;
type Story = StoryObj<typeof SwipeDownOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
