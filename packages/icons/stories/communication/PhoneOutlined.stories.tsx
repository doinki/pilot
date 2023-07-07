import type { Meta, StoryObj } from '@storybook/react';

import PhoneOutlined from '../../lib/communication/PhoneOutlined';

const meta: Meta<typeof PhoneOutlined> = {
  component: PhoneOutlined,
  tags: ['autodocs'],
  title: 'communication/PhoneOutlined',
};

export default meta;
type Story = StoryObj<typeof PhoneOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
