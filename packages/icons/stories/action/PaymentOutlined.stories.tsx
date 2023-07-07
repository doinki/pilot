import type { Meta, StoryObj } from '@storybook/react';

import PaymentOutlined from '../../lib/action/PaymentOutlined';

const meta: Meta<typeof PaymentOutlined> = {
  component: PaymentOutlined,
  tags: ['autodocs'],
  title: 'action/PaymentOutlined',
};

export default meta;
type Story = StoryObj<typeof PaymentOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
