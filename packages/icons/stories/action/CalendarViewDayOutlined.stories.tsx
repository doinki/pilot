import type { Meta, StoryObj } from '@storybook/react';

import CalendarViewDayOutlined from '../../lib/action/CalendarViewDayOutlined';

const meta: Meta<typeof CalendarViewDayOutlined> = {
  component: CalendarViewDayOutlined,
  tags: ['autodocs'],
  title: 'action/CalendarViewDayOutlined',
};

export default meta;
type Story = StoryObj<typeof CalendarViewDayOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
