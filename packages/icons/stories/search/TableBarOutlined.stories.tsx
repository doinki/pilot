import type { Meta, StoryObj } from '@storybook/react';

import TableBarOutlined from '../../lib/search/TableBarOutlined';

const meta: Meta<typeof TableBarOutlined> = {
  component: TableBarOutlined,
  tags: ['autodocs'],
  title: 'search/TableBarOutlined',
};

export default meta;
type Story = StoryObj<typeof TableBarOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
