import type { Meta, StoryObj } from '@storybook/react';

import KeyboardDoubleArrowDownOutlined from '../../lib/hardware/KeyboardDoubleArrowDownOutlined';

const meta: Meta<typeof KeyboardDoubleArrowDownOutlined> = {
  component: KeyboardDoubleArrowDownOutlined,
  tags: ['autodocs'],
  title: 'hardware/KeyboardDoubleArrowDownOutlined',
};

export default meta;
type Story = StoryObj<typeof KeyboardDoubleArrowDownOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
