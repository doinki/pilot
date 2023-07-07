import type { Meta, StoryObj } from '@storybook/react';

import PhonelinkEraseOutlined from '../../lib/communication/PhonelinkEraseOutlined';

const meta: Meta<typeof PhonelinkEraseOutlined> = {
  component: PhonelinkEraseOutlined,
  tags: ['autodocs'],
  title: 'communication/PhonelinkEraseOutlined',
};

export default meta;
type Story = StoryObj<typeof PhonelinkEraseOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
