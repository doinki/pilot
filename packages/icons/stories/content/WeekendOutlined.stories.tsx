import type { Meta, StoryObj } from '@storybook/react';

import WeekendOutlined from '../../lib/content/WeekendOutlined';

const meta: Meta<typeof WeekendOutlined> = {
  component: WeekendOutlined,
  tags: ['autodocs'],
  title: 'content/WeekendOutlined',
};

export default meta;
type Story = StoryObj<typeof WeekendOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
