import type { Meta, StoryObj } from '@storybook/react';

import KeyboardBackspaceOutlined from '../../lib/hardware/KeyboardBackspaceOutlined';

const meta: Meta<typeof KeyboardBackspaceOutlined> = {
  component: KeyboardBackspaceOutlined,
  tags: ['autodocs'],
  title: 'hardware/KeyboardBackspaceOutlined',
};

export default meta;
type Story = StoryObj<typeof KeyboardBackspaceOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
