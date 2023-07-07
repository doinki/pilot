import type { Meta, StoryObj } from '@storybook/react';

import MultilineChartOutlined from '../../lib/editor/MultilineChartOutlined';

const meta: Meta<typeof MultilineChartOutlined> = {
  component: MultilineChartOutlined,
  tags: ['autodocs'],
  title: 'editor/MultilineChartOutlined',
};

export default meta;
type Story = StoryObj<typeof MultilineChartOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
