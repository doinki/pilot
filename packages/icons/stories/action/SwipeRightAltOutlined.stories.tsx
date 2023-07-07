import type { Meta, StoryObj } from '@storybook/react';

import SwipeRightAltOutlined from '../../lib/action/SwipeRightAltOutlined';

const meta: Meta<typeof SwipeRightAltOutlined> = {
  component: SwipeRightAltOutlined,
  tags: ['autodocs'],
  title: 'action/SwipeRightAltOutlined',
};

export default meta;
type Story = StoryObj<typeof SwipeRightAltOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
