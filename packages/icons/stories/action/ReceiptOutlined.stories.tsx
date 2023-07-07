import type { Meta, StoryObj } from '@storybook/react';

import ReceiptOutlined from '../../lib/action/ReceiptOutlined';

const meta: Meta<typeof ReceiptOutlined> = {
  component: ReceiptOutlined,
  tags: ['autodocs'],
  title: 'action/ReceiptOutlined',
};

export default meta;
type Story = StoryObj<typeof ReceiptOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
