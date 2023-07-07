import type { Meta, StoryObj } from '@storybook/react';

import KeyboardArrowUpOutlined from '../../lib/hardware/KeyboardArrowUpOutlined';

const meta: Meta<typeof KeyboardArrowUpOutlined> = {
  component: KeyboardArrowUpOutlined,
  tags: ['autodocs'],
  title: 'hardware/KeyboardArrowUpOutlined',
};

export default meta;
type Story = StoryObj<typeof KeyboardArrowUpOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
