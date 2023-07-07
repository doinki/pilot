import type { Meta, StoryObj } from '@storybook/react';

import BarChartOutlined from '../../lib/editor/BarChartOutlined';

const meta: Meta<typeof BarChartOutlined> = {
  component: BarChartOutlined,
  tags: ['autodocs'],
  title: 'editor/BarChartOutlined',
};

export default meta;
type Story = StoryObj<typeof BarChartOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
