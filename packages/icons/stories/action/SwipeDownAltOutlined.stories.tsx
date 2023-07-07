import type { Meta, StoryObj } from '@storybook/react';

import SwipeDownAltOutlined from '../../lib/action/SwipeDownAltOutlined';

const meta: Meta<typeof SwipeDownAltOutlined> = {
  component: SwipeDownAltOutlined,
  tags: ['autodocs'],
  title: 'action/SwipeDownAltOutlined',
};

export default meta;
type Story = StoryObj<typeof SwipeDownAltOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
