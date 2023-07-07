import type { Meta, StoryObj } from '@storybook/react';

import BubbleChartOutlined from '../../lib/editor/BubbleChartOutlined';

const meta: Meta<typeof BubbleChartOutlined> = {
  component: BubbleChartOutlined,
  tags: ['autodocs'],
  title: 'editor/BubbleChartOutlined',
};

export default meta;
type Story = StoryObj<typeof BubbleChartOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
