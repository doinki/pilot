import type { Meta, StoryObj } from '@storybook/react';

import SpaceDashboardOutlined from '../../lib/action/SpaceDashboardOutlined';

const meta: Meta<typeof SpaceDashboardOutlined> = {
  component: SpaceDashboardOutlined,
  tags: ['autodocs'],
  title: 'action/SpaceDashboardOutlined',
};

export default meta;
type Story = StoryObj<typeof SpaceDashboardOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
