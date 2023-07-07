import type { Meta, StoryObj } from '@storybook/react';

import MonitorOutlined from '../../lib/hardware/MonitorOutlined';

const meta: Meta<typeof MonitorOutlined> = {
  component: MonitorOutlined,
  tags: ['autodocs'],
  title: 'hardware/MonitorOutlined',
};

export default meta;
type Story = StoryObj<typeof MonitorOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
