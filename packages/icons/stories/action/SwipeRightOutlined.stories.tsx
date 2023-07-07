import type { Meta, StoryObj } from '@storybook/react';

import SwipeRightOutlined from '../../lib/action/SwipeRightOutlined';

const meta: Meta<typeof SwipeRightOutlined> = {
  component: SwipeRightOutlined,
  tags: ['autodocs'],
  title: 'action/SwipeRightOutlined',
};

export default meta;
type Story = StoryObj<typeof SwipeRightOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
