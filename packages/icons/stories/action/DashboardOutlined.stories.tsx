import type { Meta, StoryObj } from '@storybook/react';

import DashboardOutlined from '../../lib/action/DashboardOutlined';

const meta: Meta<typeof DashboardOutlined> = {
  component: DashboardOutlined,
  tags: ['autodocs'],
  title: 'action/DashboardOutlined',
};

export default meta;
type Story = StoryObj<typeof DashboardOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
