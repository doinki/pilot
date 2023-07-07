import type { Meta, StoryObj } from '@storybook/react';

import CalendarMonthOutlined from '../../lib/action/CalendarMonthOutlined';

const meta: Meta<typeof CalendarMonthOutlined> = {
  component: CalendarMonthOutlined,
  tags: ['autodocs'],
  title: 'action/CalendarMonthOutlined',
};

export default meta;
type Story = StoryObj<typeof CalendarMonthOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
