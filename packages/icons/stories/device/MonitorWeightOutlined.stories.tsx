import type { Meta, StoryObj } from '@storybook/react';

import MonitorWeightOutlined from '../../lib/device/MonitorWeightOutlined';

const meta: Meta<typeof MonitorWeightOutlined> = {
  component: MonitorWeightOutlined,
  tags: ['autodocs'],
  title: 'device/MonitorWeightOutlined',
};

export default meta;
type Story = StoryObj<typeof MonitorWeightOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
