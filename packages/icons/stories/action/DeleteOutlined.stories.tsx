import type { Meta, StoryObj } from '@storybook/react';

import DeleteOutlined from '../../lib/action/DeleteOutlined';

const meta: Meta<typeof DeleteOutlined> = {
  component: DeleteOutlined,
  tags: ['autodocs'],
  title: 'action/DeleteOutlined',
};

export default meta;
type Story = StoryObj<typeof DeleteOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
