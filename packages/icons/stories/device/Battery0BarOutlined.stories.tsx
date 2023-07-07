import type { Meta, StoryObj } from '@storybook/react';

import Battery0BarOutlined from '../../lib/device/Battery0BarOutlined';

const meta: Meta<typeof Battery0BarOutlined> = {
  component: Battery0BarOutlined,
  tags: ['autodocs'],
  title: 'device/Battery0BarOutlined',
};

export default meta;
type Story = StoryObj<typeof Battery0BarOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
