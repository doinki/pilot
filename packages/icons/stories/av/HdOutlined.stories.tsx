import type { Meta, StoryObj } from '@storybook/react';

import HdOutlined from '../../lib/av/HdOutlined';

const meta: Meta<typeof HdOutlined> = {
  component: HdOutlined,
  tags: ['autodocs'],
  title: 'av/HdOutlined',
};

export default meta;
type Story = StoryObj<typeof HdOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
