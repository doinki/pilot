import type { Meta, StoryObj } from '@storybook/react';

import SignalCellularAlt1BarOutlined from '../../lib/device/SignalCellularAlt1BarOutlined';

const meta: Meta<typeof SignalCellularAlt1BarOutlined> = {
  component: SignalCellularAlt1BarOutlined,
  tags: ['autodocs'],
  title: 'device/SignalCellularAlt1BarOutlined',
};

export default meta;
type Story = StoryObj<typeof SignalCellularAlt1BarOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
