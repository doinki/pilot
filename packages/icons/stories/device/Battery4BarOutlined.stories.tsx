import type { Meta, StoryObj } from '@storybook/react';

import Battery4BarOutlined from '../../lib/device/Battery4BarOutlined';

const meta: Meta<typeof Battery4BarOutlined> = {
  component: Battery4BarOutlined,
  tags: ['autodocs'],
  title: 'device/Battery4BarOutlined',
};

export default meta;
type Story = StoryObj<typeof Battery4BarOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
