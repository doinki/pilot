import type { Meta, StoryObj } from '@storybook/react';

import InsertChartOutlined from '../../lib/editor/InsertChartOutlined';

const meta: Meta<typeof InsertChartOutlined> = {
  component: InsertChartOutlined,
  tags: ['autodocs'],
  title: 'editor/InsertChartOutlined',
};

export default meta;
type Story = StoryObj<typeof InsertChartOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
