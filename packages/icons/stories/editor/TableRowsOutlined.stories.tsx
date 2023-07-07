import type { Meta, StoryObj } from '@storybook/react';

import TableRowsOutlined from '../../lib/editor/TableRowsOutlined';

const meta: Meta<typeof TableRowsOutlined> = {
  component: TableRowsOutlined,
  tags: ['autodocs'],
  title: 'editor/TableRowsOutlined',
};

export default meta;
type Story = StoryObj<typeof TableRowsOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
