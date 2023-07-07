import type { Meta, StoryObj } from '@storybook/react';

import SwipeLeftOutlined from '../../lib/action/SwipeLeftOutlined';

const meta: Meta<typeof SwipeLeftOutlined> = {
  component: SwipeLeftOutlined,
  tags: ['autodocs'],
  title: 'action/SwipeLeftOutlined',
};

export default meta;
type Story = StoryObj<typeof SwipeLeftOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
