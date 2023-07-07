import type { Meta, StoryObj } from '@storybook/react';

import CalendarViewMonthOutlined from '../../lib/action/CalendarViewMonthOutlined';

const meta: Meta<typeof CalendarViewMonthOutlined> = {
  component: CalendarViewMonthOutlined,
  tags: ['autodocs'],
  title: 'action/CalendarViewMonthOutlined',
};

export default meta;
type Story = StoryObj<typeof CalendarViewMonthOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
