import type { Meta, StoryObj } from '@storybook/react';

import VpnKeyOffOutlined from '../../lib/communication/VpnKeyOffOutlined';

const meta: Meta<typeof VpnKeyOffOutlined> = {
  component: VpnKeyOffOutlined,
  tags: ['autodocs'],
  title: 'communication/VpnKeyOffOutlined',
};

export default meta;
type Story = StoryObj<typeof VpnKeyOffOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
