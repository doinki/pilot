import type { Meta, StoryObj } from '@storybook/react';

import CalendarViewWeekOutlined from '../../lib/action/CalendarViewWeekOutlined';

const meta: Meta<typeof CalendarViewWeekOutlined> = {
  component: CalendarViewWeekOutlined,
  tags: ['autodocs'],
  title: 'action/CalendarViewWeekOutlined',
};

export default meta;
type Story = StoryObj<typeof CalendarViewWeekOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
