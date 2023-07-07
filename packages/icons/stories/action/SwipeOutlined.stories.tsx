import type { Meta, StoryObj } from '@storybook/react';

import SwipeOutlined from '../../lib/action/SwipeOutlined';

const meta: Meta<typeof SwipeOutlined> = {
  component: SwipeOutlined,
  tags: ['autodocs'],
  title: 'action/SwipeOutlined',
};

export default meta;
type Story = StoryObj<typeof SwipeOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
