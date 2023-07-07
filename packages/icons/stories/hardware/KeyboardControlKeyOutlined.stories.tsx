import type { Meta, StoryObj } from '@storybook/react';

import KeyboardControlKeyOutlined from '../../lib/hardware/KeyboardControlKeyOutlined';

const meta: Meta<typeof KeyboardControlKeyOutlined> = {
  component: KeyboardControlKeyOutlined,
  tags: ['autodocs'],
  title: 'hardware/KeyboardControlKeyOutlined',
};

export default meta;
type Story = StoryObj<typeof KeyboardControlKeyOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
