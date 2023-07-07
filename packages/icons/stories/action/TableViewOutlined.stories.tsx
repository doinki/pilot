import type { Meta, StoryObj } from '@storybook/react';

import TableViewOutlined from '../../lib/action/TableViewOutlined';

const meta: Meta<typeof TableViewOutlined> = {
  component: TableViewOutlined,
  tags: ['autodocs'],
  title: 'action/TableViewOutlined',
};

export default meta;
type Story = StoryObj<typeof TableViewOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
