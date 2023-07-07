import type { Meta, StoryObj } from '@storybook/react';

import DocumentScannerOutlined from '../../lib/communication/DocumentScannerOutlined';

const meta: Meta<typeof DocumentScannerOutlined> = {
  component: DocumentScannerOutlined,
  tags: ['autodocs'],
  title: 'communication/DocumentScannerOutlined',
};

export default meta;
type Story = StoryObj<typeof DocumentScannerOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
