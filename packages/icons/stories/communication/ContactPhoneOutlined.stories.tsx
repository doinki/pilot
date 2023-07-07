import type { Meta, StoryObj } from '@storybook/react';

import ContactPhoneOutlined from '../../lib/communication/ContactPhoneOutlined';

const meta: Meta<typeof ContactPhoneOutlined> = {
  component: ContactPhoneOutlined,
  tags: ['autodocs'],
  title: 'communication/ContactPhoneOutlined',
};

export default meta;
type Story = StoryObj<typeof ContactPhoneOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
