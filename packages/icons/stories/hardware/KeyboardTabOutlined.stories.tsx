import type { Meta, StoryObj } from '@storybook/react';

import KeyboardTabOutlined from '../../lib/hardware/KeyboardTabOutlined';

const meta: Meta<typeof KeyboardTabOutlined> = {
  component: KeyboardTabOutlined,
  tags: ['autodocs'],
  title: 'hardware/KeyboardTabOutlined',
};

export default meta;
type Story = StoryObj<typeof KeyboardTabOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
