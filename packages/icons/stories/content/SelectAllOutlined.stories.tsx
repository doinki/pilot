import type { Meta, StoryObj } from '@storybook/react';

import SelectAllOutlined from '../../lib/content/SelectAllOutlined';

const meta: Meta<typeof SelectAllOutlined> = {
  component: SelectAllOutlined,
  tags: ['autodocs'],
  title: 'content/SelectAllOutlined',
};

export default meta;
type Story = StoryObj<typeof SelectAllOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
