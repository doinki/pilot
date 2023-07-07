import type { Meta, StoryObj } from '@storybook/react';

import ScatterPlotOutlined from '../../lib/editor/ScatterPlotOutlined';

const meta: Meta<typeof ScatterPlotOutlined> = {
  component: ScatterPlotOutlined,
  tags: ['autodocs'],
  title: 'editor/ScatterPlotOutlined',
};

export default meta;
type Story = StoryObj<typeof ScatterPlotOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
