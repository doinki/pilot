import type { Meta, StoryObj } from '@storybook/react';

import Battery6BarOutlined from '../../lib/device/Battery6BarOutlined';

const meta: Meta<typeof Battery6BarOutlined> = {
  component: Battery6BarOutlined,
  tags: ['autodocs'],
  title: 'device/Battery6BarOutlined',
};

export default meta;
type Story = StoryObj<typeof Battery6BarOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
