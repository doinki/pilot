import type { Meta, StoryObj } from '@storybook/react';

import LeakRemoveOutlined from '../../lib/image/LeakRemoveOutlined';

const meta: Meta<typeof LeakRemoveOutlined> = {
  component: LeakRemoveOutlined,
  tags: ['autodocs'],
  title: 'image/LeakRemoveOutlined',
};

export default meta;
type Story = StoryObj<typeof LeakRemoveOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
