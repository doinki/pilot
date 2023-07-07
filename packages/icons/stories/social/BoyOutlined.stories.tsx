import type { Meta, StoryObj } from '@storybook/react';

import BoyOutlined from '../../lib/social/BoyOutlined';

const meta: Meta<typeof BoyOutlined> = {
  component: BoyOutlined,
  tags: ['autodocs'],
  title: 'social/BoyOutlined',
};

export default meta;
type Story = StoryObj<typeof BoyOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
