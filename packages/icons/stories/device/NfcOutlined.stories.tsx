import type { Meta, StoryObj } from '@storybook/react';

import NfcOutlined from '../../lib/device/NfcOutlined';

const meta: Meta<typeof NfcOutlined> = {
  component: NfcOutlined,
  tags: ['autodocs'],
  title: 'device/NfcOutlined',
};

export default meta;
type Story = StoryObj<typeof NfcOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
