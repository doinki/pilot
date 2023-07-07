import type { Meta, StoryObj } from '@storybook/react';

import QueryStatsOutlined from '../../lib/editor/QueryStatsOutlined';

const meta: Meta<typeof QueryStatsOutlined> = {
  component: QueryStatsOutlined,
  tags: ['autodocs'],
  title: 'editor/QueryStatsOutlined',
};

export default meta;
type Story = StoryObj<typeof QueryStatsOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
