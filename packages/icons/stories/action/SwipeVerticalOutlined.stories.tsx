import type { Meta, StoryObj } from '@storybook/react';

import SwipeVerticalOutlined from '../../lib/action/SwipeVerticalOutlined';

const meta: Meta<typeof SwipeVerticalOutlined> = {
  component: SwipeVerticalOutlined,
  tags: ['autodocs'],
  title: 'action/SwipeVerticalOutlined',
};

export default meta;
type Story = StoryObj<typeof SwipeVerticalOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
