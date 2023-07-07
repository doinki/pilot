import type { Meta, StoryObj } from '@storybook/react';

import CalendarTodayOutlined from '../../lib/action/CalendarTodayOutlined';

const meta: Meta<typeof CalendarTodayOutlined> = {
  component: CalendarTodayOutlined,
  tags: ['autodocs'],
  title: 'action/CalendarTodayOutlined',
};

export default meta;
type Story = StoryObj<typeof CalendarTodayOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
