import type { Meta, StoryObj } from '@storybook/react';

import KeyboardHideOutlined from '../../lib/hardware/KeyboardHideOutlined';

const meta: Meta<typeof KeyboardHideOutlined> = {
  component: KeyboardHideOutlined,
  tags: ['autodocs'],
  title: 'hardware/KeyboardHideOutlined',
};

export default meta;
type Story = StoryObj<typeof KeyboardHideOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
