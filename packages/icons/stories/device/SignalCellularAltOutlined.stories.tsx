import type { Meta, StoryObj } from '@storybook/react';

import SignalCellularAltOutlined from '../../lib/device/SignalCellularAltOutlined';

const meta: Meta<typeof SignalCellularAltOutlined> = {
  component: SignalCellularAltOutlined,
  tags: ['autodocs'],
  title: 'device/SignalCellularAltOutlined',
};

export default meta;
type Story = StoryObj<typeof SignalCellularAltOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
