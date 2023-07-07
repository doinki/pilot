import type { Meta, StoryObj } from '@storybook/react';

import AddChartOutlined from '../../lib/editor/AddChartOutlined';

const meta: Meta<typeof AddChartOutlined> = {
  component: AddChartOutlined,
  tags: ['autodocs'],
  title: 'editor/AddChartOutlined',
};

export default meta;
type Story = StoryObj<typeof AddChartOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
