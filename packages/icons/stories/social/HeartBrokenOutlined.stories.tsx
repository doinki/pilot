import type { Meta, StoryObj } from '@storybook/react';

import HeartBrokenOutlined from '../../lib/social/HeartBrokenOutlined';

const meta: Meta<typeof HeartBrokenOutlined> = {
  component: HeartBrokenOutlined,
  tags: ['autodocs'],
  title: 'social/HeartBrokenOutlined',
};

export default meta;
type Story = StoryObj<typeof HeartBrokenOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
