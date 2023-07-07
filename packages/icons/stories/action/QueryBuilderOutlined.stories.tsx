import type { Meta, StoryObj } from '@storybook/react';

import QueryBuilderOutlined from '../../lib/action/QueryBuilderOutlined';

const meta: Meta<typeof QueryBuilderOutlined> = {
  component: QueryBuilderOutlined,
  tags: ['autodocs'],
  title: 'action/QueryBuilderOutlined',
};

export default meta;
type Story = StoryObj<typeof QueryBuilderOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
