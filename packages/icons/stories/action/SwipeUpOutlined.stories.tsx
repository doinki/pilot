import type { Meta, StoryObj } from '@storybook/react';

import SwipeUpOutlined from '../../lib/action/SwipeUpOutlined';

const meta: Meta<typeof SwipeUpOutlined> = {
  component: SwipeUpOutlined,
  tags: ['autodocs'],
  title: 'action/SwipeUpOutlined',
};

export default meta;
type Story = StoryObj<typeof SwipeUpOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
