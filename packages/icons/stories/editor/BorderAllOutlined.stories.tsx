import type { Meta, StoryObj } from '@storybook/react';

import BorderAllOutlined from '../../lib/editor/BorderAllOutlined';

const meta: Meta<typeof BorderAllOutlined> = {
  component: BorderAllOutlined,
  tags: ['autodocs'],
  title: 'editor/BorderAllOutlined',
};

export default meta;
type Story = StoryObj<typeof BorderAllOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
