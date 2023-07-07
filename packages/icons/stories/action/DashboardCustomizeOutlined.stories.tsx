import type { Meta, StoryObj } from '@storybook/react';

import DashboardCustomizeOutlined from '../../lib/action/DashboardCustomizeOutlined';

const meta: Meta<typeof DashboardCustomizeOutlined> = {
  component: DashboardCustomizeOutlined,
  tags: ['autodocs'],
  title: 'action/DashboardCustomizeOutlined',
};

export default meta;
type Story = StoryObj<typeof DashboardCustomizeOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
