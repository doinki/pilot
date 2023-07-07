import type { Meta, StoryObj } from '@storybook/react';

import SmartScreenOutlined from '../../lib/hardware/SmartScreenOutlined';

const meta: Meta<typeof SmartScreenOutlined> = {
  component: SmartScreenOutlined,
  tags: ['autodocs'],
  title: 'hardware/SmartScreenOutlined',
};

export default meta;
type Story = StoryObj<typeof SmartScreenOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
