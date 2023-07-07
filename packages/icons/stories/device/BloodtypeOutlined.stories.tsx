import type { Meta, StoryObj } from '@storybook/react';

import BloodtypeOutlined from '../../lib/device/BloodtypeOutlined';

const meta: Meta<typeof BloodtypeOutlined> = {
  component: BloodtypeOutlined,
  tags: ['autodocs'],
  title: 'device/BloodtypeOutlined',
};

export default meta;
type Story = StoryObj<typeof BloodtypeOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
