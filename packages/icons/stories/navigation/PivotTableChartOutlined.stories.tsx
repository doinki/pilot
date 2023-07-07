import type { Meta, StoryObj } from '@storybook/react';

import PivotTableChartOutlined from '../../lib/navigation/PivotTableChartOutlined';

const meta: Meta<typeof PivotTableChartOutlined> = {
  component: PivotTableChartOutlined,
  tags: ['autodocs'],
  title: 'navigation/PivotTableChartOutlined',
};

export default meta;
type Story = StoryObj<typeof PivotTableChartOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
