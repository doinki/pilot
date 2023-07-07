import type { Meta, StoryObj } from '@storybook/react';

import EnergySavingsLeafOutlined from '../../lib/home/EnergySavingsLeafOutlined';

const meta: Meta<typeof EnergySavingsLeafOutlined> = {
  component: EnergySavingsLeafOutlined,
  tags: ['autodocs'],
  title: 'home/EnergySavingsLeafOutlined',
};

export default meta;
type Story = StoryObj<typeof EnergySavingsLeafOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
