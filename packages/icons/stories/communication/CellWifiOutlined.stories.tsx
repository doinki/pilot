import type { Meta, StoryObj } from '@storybook/react';

import CellWifiOutlined from '../../lib/communication/CellWifiOutlined';

const meta: Meta<typeof CellWifiOutlined> = {
  component: CellWifiOutlined,
  tags: ['autodocs'],
  title: 'communication/CellWifiOutlined',
};

export default meta;
type Story = StoryObj<typeof CellWifiOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
