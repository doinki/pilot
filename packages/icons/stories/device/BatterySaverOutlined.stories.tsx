import type { Meta, StoryObj } from '@storybook/react';

import BatterySaverOutlined from '../../lib/device/BatterySaverOutlined';

const meta: Meta<typeof BatterySaverOutlined> = {
  component: BatterySaverOutlined,
  tags: ['autodocs'],
  title: 'device/BatterySaverOutlined',
};

export default meta;
type Story = StoryObj<typeof BatterySaverOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
