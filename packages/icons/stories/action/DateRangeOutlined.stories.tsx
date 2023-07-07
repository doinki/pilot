import type { Meta, StoryObj } from '@storybook/react';

import DateRangeOutlined from '../../lib/action/DateRangeOutlined';

const meta: Meta<typeof DateRangeOutlined> = {
  component: DateRangeOutlined,
  tags: ['autodocs'],
  title: 'action/DateRangeOutlined',
};

export default meta;
type Story = StoryObj<typeof DateRangeOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
