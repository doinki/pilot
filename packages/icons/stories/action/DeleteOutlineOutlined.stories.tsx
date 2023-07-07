import type { Meta, StoryObj } from '@storybook/react';

import DeleteOutlineOutlined from '../../lib/action/DeleteOutlineOutlined';

const meta: Meta<typeof DeleteOutlineOutlined> = {
  component: DeleteOutlineOutlined,
  tags: ['autodocs'],
  title: 'action/DeleteOutlineOutlined',
};

export default meta;
type Story = StoryObj<typeof DeleteOutlineOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
