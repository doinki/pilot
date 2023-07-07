import type { Meta, StoryObj } from '@storybook/react';

import MacroOffOutlined from '../../lib/device/MacroOffOutlined';

const meta: Meta<typeof MacroOffOutlined> = {
  component: MacroOffOutlined,
  tags: ['autodocs'],
  title: 'device/MacroOffOutlined',
};

export default meta;
type Story = StoryObj<typeof MacroOffOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
