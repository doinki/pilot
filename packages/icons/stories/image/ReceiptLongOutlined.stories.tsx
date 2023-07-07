import type { Meta, StoryObj } from '@storybook/react';

import ReceiptLongOutlined from '../../lib/image/ReceiptLongOutlined';

const meta: Meta<typeof ReceiptLongOutlined> = {
  component: ReceiptLongOutlined,
  tags: ['autodocs'],
  title: 'image/ReceiptLongOutlined',
};

export default meta;
type Story = StoryObj<typeof ReceiptLongOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
