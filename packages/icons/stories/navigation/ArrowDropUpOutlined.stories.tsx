import type { Meta, StoryObj } from '@storybook/react';

import ArrowDropUpOutlined from '../../lib/navigation/ArrowDropUpOutlined';

const meta: Meta<typeof ArrowDropUpOutlined> = {
  component: ArrowDropUpOutlined,
  tags: ['autodocs'],
  title: 'navigation/ArrowDropUpOutlined',
};

export default meta;
type Story = StoryObj<typeof ArrowDropUpOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
