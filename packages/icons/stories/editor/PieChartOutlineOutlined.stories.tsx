import type { Meta, StoryObj } from '@storybook/react';

import PieChartOutlineOutlined from '../../lib/editor/PieChartOutlineOutlined';

const meta: Meta<typeof PieChartOutlineOutlined> = {
  component: PieChartOutlineOutlined,
  tags: ['autodocs'],
  title: 'editor/PieChartOutlineOutlined',
};

export default meta;
type Story = StoryObj<typeof PieChartOutlineOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
