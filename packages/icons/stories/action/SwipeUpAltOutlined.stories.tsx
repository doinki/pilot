import type { Meta, StoryObj } from '@storybook/react';

import SwipeUpAltOutlined from '../../lib/action/SwipeUpAltOutlined';

const meta: Meta<typeof SwipeUpAltOutlined> = {
  component: SwipeUpAltOutlined,
  tags: ['autodocs'],
  title: 'action/SwipeUpAltOutlined',
};

export default meta;
type Story = StoryObj<typeof SwipeUpAltOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
