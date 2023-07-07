import type { Meta, StoryObj } from '@storybook/react';

import TodayOutlined from '../../lib/action/TodayOutlined';

const meta: Meta<typeof TodayOutlined> = {
  component: TodayOutlined,
  tags: ['autodocs'],
  title: 'action/TodayOutlined',
};

export default meta;
type Story = StoryObj<typeof TodayOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
