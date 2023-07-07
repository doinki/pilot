import type { Meta, StoryObj } from '@storybook/react';

import SwipeLeftAltOutlined from '../../lib/action/SwipeLeftAltOutlined';

const meta: Meta<typeof SwipeLeftAltOutlined> = {
  component: SwipeLeftAltOutlined,
  tags: ['autodocs'],
  title: 'action/SwipeLeftAltOutlined',
};

export default meta;
type Story = StoryObj<typeof SwipeLeftAltOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
