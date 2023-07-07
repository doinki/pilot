import type { Meta, StoryObj } from '@storybook/react';

import SignalCellularAlt2BarOutlined from '../../lib/device/SignalCellularAlt2BarOutlined';

const meta: Meta<typeof SignalCellularAlt2BarOutlined> = {
  component: SignalCellularAlt2BarOutlined,
  tags: ['autodocs'],
  title: 'device/SignalCellularAlt2BarOutlined',
};

export default meta;
type Story = StoryObj<typeof SignalCellularAlt2BarOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
