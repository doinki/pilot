import type { Meta, StoryObj } from '@storybook/react';

import StackedBarChartOutlined from '../../lib/content/StackedBarChartOutlined';

const meta: Meta<typeof StackedBarChartOutlined> = {
  component: StackedBarChartOutlined,
  tags: ['autodocs'],
  title: 'content/StackedBarChartOutlined',
};

export default meta;
type Story = StoryObj<typeof StackedBarChartOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
