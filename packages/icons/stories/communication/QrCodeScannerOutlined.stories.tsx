import type { Meta, StoryObj } from '@storybook/react';

import QrCodeScannerOutlined from '../../lib/communication/QrCodeScannerOutlined';

const meta: Meta<typeof QrCodeScannerOutlined> = {
  component: QrCodeScannerOutlined,
  tags: ['autodocs'],
  title: 'communication/QrCodeScannerOutlined',
};

export default meta;
type Story = StoryObj<typeof QrCodeScannerOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
