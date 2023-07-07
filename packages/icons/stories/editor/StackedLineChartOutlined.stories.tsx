import type { Meta, StoryObj } from '@storybook/react';

import StackedLineChartOutlined from '../../lib/editor/StackedLineChartOutlined';

const meta: Meta<typeof StackedLineChartOutlined> = {
  component: StackedLineChartOutlined,
  tags: ['autodocs'],
  title: 'editor/StackedLineChartOutlined',
};

export default meta;
type Story = StoryObj<typeof StackedLineChartOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
