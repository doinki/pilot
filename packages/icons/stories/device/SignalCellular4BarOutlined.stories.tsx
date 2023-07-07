import type { Meta, StoryObj } from '@storybook/react';

import SignalCellular4BarOutlined from '../../lib/device/SignalCellular4BarOutlined';

const meta: Meta<typeof SignalCellular4BarOutlined> = {
  component: SignalCellular4BarOutlined,
  tags: ['autodocs'],
  title: 'device/SignalCellular4BarOutlined',
};

export default meta;
type Story = StoryObj<typeof SignalCellular4BarOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
