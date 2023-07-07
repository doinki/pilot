import type { Meta, StoryObj } from '@storybook/react';

import AdfScannerOutlined from '../../lib/hardware/AdfScannerOutlined';

const meta: Meta<typeof AdfScannerOutlined> = {
  component: AdfScannerOutlined,
  tags: ['autodocs'],
  title: 'hardware/AdfScannerOutlined',
};

export default meta;
type Story = StoryObj<typeof AdfScannerOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
