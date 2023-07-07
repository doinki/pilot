import type { Meta, StoryObj } from '@storybook/react';

import PhoneDisabledOutlined from '../../lib/communication/PhoneDisabledOutlined';

const meta: Meta<typeof PhoneDisabledOutlined> = {
  component: PhoneDisabledOutlined,
  tags: ['autodocs'],
  title: 'communication/PhoneDisabledOutlined',
};

export default meta;
type Story = StoryObj<typeof PhoneDisabledOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
