import type { Meta, StoryObj } from '@storybook/react';

import Battery1BarOutlined from '../../lib/device/Battery1BarOutlined';

const meta: Meta<typeof Battery1BarOutlined> = {
  component: Battery1BarOutlined,
  tags: ['autodocs'],
  title: 'device/Battery1BarOutlined',
};

export default meta;
type Story = StoryObj<typeof Battery1BarOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
