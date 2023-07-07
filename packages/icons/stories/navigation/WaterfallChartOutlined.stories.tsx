import type { Meta, StoryObj } from '@storybook/react';

import WaterfallChartOutlined from '../../lib/navigation/WaterfallChartOutlined';

const meta: Meta<typeof WaterfallChartOutlined> = {
  component: WaterfallChartOutlined,
  tags: ['autodocs'],
  title: 'navigation/WaterfallChartOutlined',
};

export default meta;
type Story = StoryObj<typeof WaterfallChartOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
