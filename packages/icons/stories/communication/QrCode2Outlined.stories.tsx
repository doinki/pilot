import type { Meta, StoryObj } from '@storybook/react';

import QrCode2Outlined from '../../lib/communication/QrCode2Outlined';

const meta: Meta<typeof QrCode2Outlined> = {
  component: QrCode2Outlined,
  tags: ['autodocs'],
  title: 'communication/QrCode2Outlined',
};

export default meta;
type Story = StoryObj<typeof QrCode2Outlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
