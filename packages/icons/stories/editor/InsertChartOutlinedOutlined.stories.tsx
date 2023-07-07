import type { Meta, StoryObj } from '@storybook/react';

import InsertChartOutlinedOutlined from '../../lib/editor/InsertChartOutlinedOutlined';

const meta: Meta<typeof InsertChartOutlinedOutlined> = {
  component: InsertChartOutlinedOutlined,
  tags: ['autodocs'],
  title: 'editor/InsertChartOutlinedOutlined',
};

export default meta;
type Story = StoryObj<typeof InsertChartOutlinedOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
