import type { Meta, StoryObj } from '@storybook/react';

import DoneAllOutlined from '../../lib/action/DoneAllOutlined';

const meta: Meta<typeof DoneAllOutlined> = {
  component: DoneAllOutlined,
  tags: ['autodocs'],
  title: 'action/DoneAllOutlined',
};

export default meta;
type Story = StoryObj<typeof DoneAllOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
