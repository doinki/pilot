import type { Meta, StoryObj } from '@storybook/react';

import PermContactCalendarOutlined from '../../lib/action/PermContactCalendarOutlined';

const meta: Meta<typeof PermContactCalendarOutlined> = {
  component: PermContactCalendarOutlined,
  tags: ['autodocs'],
  title: 'action/PermContactCalendarOutlined',
};

export default meta;
type Story = StoryObj<typeof PermContactCalendarOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
