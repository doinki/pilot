import type { Meta, StoryObj } from '@storybook/react';

import Battery3BarOutlined from '../../lib/device/Battery3BarOutlined';

const meta: Meta<typeof Battery3BarOutlined> = {
  component: Battery3BarOutlined,
  tags: ['autodocs'],
  title: 'device/Battery3BarOutlined',
};

export default meta;
type Story = StoryObj<typeof Battery3BarOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
