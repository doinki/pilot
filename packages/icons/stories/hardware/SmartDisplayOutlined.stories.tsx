import type { Meta, StoryObj } from '@storybook/react';

import SmartDisplayOutlined from '../../lib/hardware/SmartDisplayOutlined';

const meta: Meta<typeof SmartDisplayOutlined> = {
  component: SmartDisplayOutlined,
  tags: ['autodocs'],
  title: 'hardware/SmartDisplayOutlined',
};

export default meta;
type Story = StoryObj<typeof SmartDisplayOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
