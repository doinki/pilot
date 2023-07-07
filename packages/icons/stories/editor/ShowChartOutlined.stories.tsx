import type { Meta, StoryObj } from '@storybook/react';

import ShowChartOutlined from '../../lib/editor/ShowChartOutlined';

const meta: Meta<typeof ShowChartOutlined> = {
  component: ShowChartOutlined,
  tags: ['autodocs'],
  title: 'editor/ShowChartOutlined',
};

export default meta;
type Story = StoryObj<typeof ShowChartOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
