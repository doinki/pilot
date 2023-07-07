import type { Meta, StoryObj } from '@storybook/react';

import CandlestickChartOutlined from '../../lib/editor/CandlestickChartOutlined';

const meta: Meta<typeof CandlestickChartOutlined> = {
  component: CandlestickChartOutlined,
  tags: ['autodocs'],
  title: 'editor/CandlestickChartOutlined',
};

export default meta;
type Story = StoryObj<typeof CandlestickChartOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
