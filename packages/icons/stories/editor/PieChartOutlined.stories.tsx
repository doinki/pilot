import type { Meta, StoryObj } from '@storybook/react';

import PieChartOutlined from '../../lib/editor/PieChartOutlined';

const meta: Meta<typeof PieChartOutlined> = {
  component: PieChartOutlined,
  tags: ['autodocs'],
  title: 'editor/PieChartOutlined',
};

export default meta;
type Story = StoryObj<typeof PieChartOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
