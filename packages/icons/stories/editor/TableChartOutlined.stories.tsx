import type { Meta, StoryObj } from '@storybook/react';

import TableChartOutlined from '../../lib/editor/TableChartOutlined';

const meta: Meta<typeof TableChartOutlined> = {
  component: TableChartOutlined,
  tags: ['autodocs'],
  title: 'editor/TableChartOutlined',
};

export default meta;
type Story = StoryObj<typeof TableChartOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
