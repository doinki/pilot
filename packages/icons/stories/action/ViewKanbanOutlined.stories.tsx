import type { Meta, StoryObj } from '@storybook/react';

import ViewKanbanOutlined from '../../lib/action/ViewKanbanOutlined';

const meta: Meta<typeof ViewKanbanOutlined> = {
  component: ViewKanbanOutlined,
  tags: ['autodocs'],
  title: 'action/ViewKanbanOutlined',
};

export default meta;
type Story = StoryObj<typeof ViewKanbanOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
