import type { Meta, StoryObj } from '@storybook/react';

import EditNoteOutlined from '../../lib/editor/EditNoteOutlined';

const meta: Meta<typeof EditNoteOutlined> = {
  component: EditNoteOutlined,
  tags: ['autodocs'],
  title: 'editor/EditNoteOutlined',
};

export default meta;
type Story = StoryObj<typeof EditNoteOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
