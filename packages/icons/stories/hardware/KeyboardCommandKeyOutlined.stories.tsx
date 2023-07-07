import type { Meta, StoryObj } from '@storybook/react';

import KeyboardCommandKeyOutlined from '../../lib/hardware/KeyboardCommandKeyOutlined';

const meta: Meta<typeof KeyboardCommandKeyOutlined> = {
  component: KeyboardCommandKeyOutlined,
  tags: ['autodocs'],
  title: 'hardware/KeyboardCommandKeyOutlined',
};

export default meta;
type Story = StoryObj<typeof KeyboardCommandKeyOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
