import type { Meta, StoryObj } from '@storybook/react';

import SignalCellular0BarOutlined from '../../lib/device/SignalCellular0BarOutlined';

const meta: Meta<typeof SignalCellular0BarOutlined> = {
  component: SignalCellular0BarOutlined,
  tags: ['autodocs'],
  title: 'device/SignalCellular0BarOutlined',
};

export default meta;
type Story = StoryObj<typeof SignalCellular0BarOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
