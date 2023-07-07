import type { Meta, StoryObj } from '@storybook/react';

import AreaChartOutlined from '../../lib/editor/AreaChartOutlined';

const meta: Meta<typeof AreaChartOutlined> = {
  component: AreaChartOutlined,
  tags: ['autodocs'],
  title: 'editor/AreaChartOutlined',
};

export default meta;
type Story = StoryObj<typeof AreaChartOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
