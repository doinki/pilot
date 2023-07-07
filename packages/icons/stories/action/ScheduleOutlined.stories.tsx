import type { Meta, StoryObj } from '@storybook/react';

import ScheduleOutlined from '../../lib/action/ScheduleOutlined';

const meta: Meta<typeof ScheduleOutlined> = {
  component: ScheduleOutlined,
  tags: ['autodocs'],
  title: 'action/ScheduleOutlined',
};

export default meta;
type Story = StoryObj<typeof ScheduleOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
