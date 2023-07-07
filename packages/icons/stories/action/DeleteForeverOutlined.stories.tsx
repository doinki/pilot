import type { Meta, StoryObj } from '@storybook/react';

import DeleteForeverOutlined from '../../lib/action/DeleteForeverOutlined';

const meta: Meta<typeof DeleteForeverOutlined> = {
  component: DeleteForeverOutlined,
  tags: ['autodocs'],
  title: 'action/DeleteForeverOutlined',
};

export default meta;
type Story = StoryObj<typeof DeleteForeverOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
