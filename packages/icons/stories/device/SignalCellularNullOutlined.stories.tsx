import type { Meta, StoryObj } from '@storybook/react';

import SignalCellularNullOutlined from '../../lib/device/SignalCellularNullOutlined';

const meta: Meta<typeof SignalCellularNullOutlined> = {
  component: SignalCellularNullOutlined,
  tags: ['autodocs'],
  title: 'device/SignalCellularNullOutlined',
};

export default meta;
type Story = StoryObj<typeof SignalCellularNullOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
