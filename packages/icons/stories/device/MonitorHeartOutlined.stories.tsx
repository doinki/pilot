import type { Meta, StoryObj } from '@storybook/react';

import MonitorHeartOutlined from '../../lib/device/MonitorHeartOutlined';

const meta: Meta<typeof MonitorHeartOutlined> = {
  component: MonitorHeartOutlined,
  tags: ['autodocs'],
  title: 'device/MonitorHeartOutlined',
};

export default meta;
type Story = StoryObj<typeof MonitorHeartOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
