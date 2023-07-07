import type { Meta, StoryObj } from '@storybook/react';

import KeyboardOptionKeyOutlined from '../../lib/hardware/KeyboardOptionKeyOutlined';

const meta: Meta<typeof KeyboardOptionKeyOutlined> = {
  component: KeyboardOptionKeyOutlined,
  tags: ['autodocs'],
  title: 'hardware/KeyboardOptionKeyOutlined',
};

export default meta;
type Story = StoryObj<typeof KeyboardOptionKeyOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
