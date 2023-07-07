import type { Meta, StoryObj } from '@storybook/react';

import SsidChartOutlined from '../../lib/device/SsidChartOutlined';

const meta: Meta<typeof SsidChartOutlined> = {
  component: SsidChartOutlined,
  tags: ['autodocs'],
  title: 'device/SsidChartOutlined',
};

export default meta;
type Story = StoryObj<typeof SsidChartOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
