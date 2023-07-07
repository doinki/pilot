import type { Meta, StoryObj } from '@storybook/react';

import SendTimeExtensionOutlined from '../../lib/communication/SendTimeExtensionOutlined';

const meta: Meta<typeof SendTimeExtensionOutlined> = {
  component: SendTimeExtensionOutlined,
  tags: ['autodocs'],
  title: 'communication/SendTimeExtensionOutlined',
};

export default meta;
type Story = StoryObj<typeof SendTimeExtensionOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
