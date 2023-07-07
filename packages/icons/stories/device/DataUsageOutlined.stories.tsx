import type { Meta, StoryObj } from '@storybook/react';

import DataUsageOutlined from '../../lib/device/DataUsageOutlined';

const meta: Meta<typeof DataUsageOutlined> = {
  component: DataUsageOutlined,
  tags: ['autodocs'],
  title: 'device/DataUsageOutlined',
};

export default meta;
type Story = StoryObj<typeof DataUsageOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
