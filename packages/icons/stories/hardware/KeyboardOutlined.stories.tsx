import type { Meta, StoryObj } from '@storybook/react';

import KeyboardOutlined from '../../lib/hardware/KeyboardOutlined';

const meta: Meta<typeof KeyboardOutlined> = {
  component: KeyboardOutlined,
  tags: ['autodocs'],
  title: 'hardware/KeyboardOutlined',
};

export default meta;
type Story = StoryObj<typeof KeyboardOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
