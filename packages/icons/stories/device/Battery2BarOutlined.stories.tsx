import type { Meta, StoryObj } from '@storybook/react';

import Battery2BarOutlined from '../../lib/device/Battery2BarOutlined';

const meta: Meta<typeof Battery2BarOutlined> = {
  component: Battery2BarOutlined,
  tags: ['autodocs'],
  title: 'device/Battery2BarOutlined',
};

export default meta;
type Story = StoryObj<typeof Battery2BarOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
