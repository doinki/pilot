import type { Meta, StoryObj } from '@storybook/react';

import VpnKeyOutlined from '../../lib/communication/VpnKeyOutlined';

const meta: Meta<typeof VpnKeyOutlined> = {
  component: VpnKeyOutlined,
  tags: ['autodocs'],
  title: 'communication/VpnKeyOutlined',
};

export default meta;
type Story = StoryObj<typeof VpnKeyOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
