import type { Meta, StoryObj } from '@storybook/react';

import KeyboardDoubleArrowUpOutlined from '../../lib/hardware/KeyboardDoubleArrowUpOutlined';

const meta: Meta<typeof KeyboardDoubleArrowUpOutlined> = {
  component: KeyboardDoubleArrowUpOutlined,
  tags: ['autodocs'],
  title: 'hardware/KeyboardDoubleArrowUpOutlined',
};

export default meta;
type Story = StoryObj<typeof KeyboardDoubleArrowUpOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
