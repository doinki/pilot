import type { Meta, StoryObj } from '@storybook/react';

import KeyboardReturnOutlined from '../../lib/hardware/KeyboardReturnOutlined';

const meta: Meta<typeof KeyboardReturnOutlined> = {
  component: KeyboardReturnOutlined,
  tags: ['autodocs'],
  title: 'hardware/KeyboardReturnOutlined',
};

export default meta;
type Story = StoryObj<typeof KeyboardReturnOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
