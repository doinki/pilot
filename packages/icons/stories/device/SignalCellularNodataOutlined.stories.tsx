import type { Meta, StoryObj } from '@storybook/react';

import SignalCellularNodataOutlined from '../../lib/device/SignalCellularNodataOutlined';

const meta: Meta<typeof SignalCellularNodataOutlined> = {
  component: SignalCellularNodataOutlined,
  tags: ['autodocs'],
  title: 'device/SignalCellularNodataOutlined',
};

export default meta;
type Story = StoryObj<typeof SignalCellularNodataOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
