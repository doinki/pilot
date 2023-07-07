import type { Meta, StoryObj } from '@storybook/react';

import PhonelinkLockOutlined from '../../lib/communication/PhonelinkLockOutlined';

const meta: Meta<typeof PhonelinkLockOutlined> = {
  component: PhonelinkLockOutlined,
  tags: ['autodocs'],
  title: 'communication/PhonelinkLockOutlined',
};

export default meta;
type Story = StoryObj<typeof PhonelinkLockOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
