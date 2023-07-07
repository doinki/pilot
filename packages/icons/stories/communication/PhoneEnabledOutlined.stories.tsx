import type { Meta, StoryObj } from '@storybook/react';

import PhoneEnabledOutlined from '../../lib/communication/PhoneEnabledOutlined';

const meta: Meta<typeof PhoneEnabledOutlined> = {
  component: PhoneEnabledOutlined,
  tags: ['autodocs'],
  title: 'communication/PhoneEnabledOutlined',
};

export default meta;
type Story = StoryObj<typeof PhoneEnabledOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
