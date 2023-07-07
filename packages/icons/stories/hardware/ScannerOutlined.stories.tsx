import type { Meta, StoryObj } from '@storybook/react';

import ScannerOutlined from '../../lib/hardware/ScannerOutlined';

const meta: Meta<typeof ScannerOutlined> = {
  component: ScannerOutlined,
  tags: ['autodocs'],
  title: 'hardware/ScannerOutlined',
};

export default meta;
type Story = StoryObj<typeof ScannerOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
