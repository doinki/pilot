import type { Meta, StoryObj } from '@storybook/react';

import QrCodeOutlined from '../../lib/communication/QrCodeOutlined';

const meta: Meta<typeof QrCodeOutlined> = {
  component: QrCodeOutlined,
  tags: ['autodocs'],
  title: 'communication/QrCodeOutlined',
};

export default meta;
type Story = StoryObj<typeof QrCodeOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
