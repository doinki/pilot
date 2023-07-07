import type { Meta, StoryObj } from '@storybook/react';

import NotesOutlined from '../../lib/editor/NotesOutlined';

const meta: Meta<typeof NotesOutlined> = {
  component: NotesOutlined,
  tags: ['autodocs'],
  title: 'editor/NotesOutlined',
};

export default meta;
type Story = StoryObj<typeof NotesOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
