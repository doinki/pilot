import type { Meta, StoryObj } from '@storybook/react';

import PortableWifiOffOutlined from '../../lib/communication/PortableWifiOffOutlined';

const meta: Meta<typeof PortableWifiOffOutlined> = {
  component: PortableWifiOffOutlined,
  tags: ['autodocs'],
  title: 'communication/PortableWifiOffOutlined',
};

export default meta;
type Story = StoryObj<typeof PortableWifiOffOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
