import type { Meta, StoryObj } from '@storybook/react';

import PermScanWifiOutlined from '../../lib/action/PermScanWifiOutlined';

const meta: Meta<typeof PermScanWifiOutlined> = {
  component: PermScanWifiOutlined,
  tags: ['autodocs'],
  title: 'action/PermScanWifiOutlined',
};

export default meta;
type Story = StoryObj<typeof PermScanWifiOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
