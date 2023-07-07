import type { Meta, StoryObj } from '@storybook/react';

import EditCalendarOutlined from '../../lib/action/EditCalendarOutlined';

const meta: Meta<typeof EditCalendarOutlined> = {
  component: EditCalendarOutlined,
  tags: ['autodocs'],
  title: 'action/EditCalendarOutlined',
};

export default meta;
type Story = StoryObj<typeof EditCalendarOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
