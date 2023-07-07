import type { Meta, StoryObj } from '@storybook/react';

import WaterOutlined from '../../lib/device/WaterOutlined';

const meta: Meta<typeof WaterOutlined> = {
  component: WaterOutlined,
  tags: ['autodocs'],
  title: 'device/WaterOutlined',
};

export default meta;
type Story = StoryObj<typeof WaterOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
