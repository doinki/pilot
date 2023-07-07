import type { Meta, StoryObj } from '@storybook/react';

import Battery5BarOutlined from '../../lib/device/Battery5BarOutlined';

const meta: Meta<typeof Battery5BarOutlined> = {
  component: Battery5BarOutlined,
  tags: ['autodocs'],
  title: 'device/Battery5BarOutlined',
};

export default meta;
type Story = StoryObj<typeof Battery5BarOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
