import type { Meta, StoryObj } from '@storybook/react';

import NoteAddOutlined from '../../lib/action/NoteAddOutlined';

const meta: Meta<typeof NoteAddOutlined> = {
  component: NoteAddOutlined,
  tags: ['autodocs'],
  title: 'action/NoteAddOutlined',
};

export default meta;
type Story = StoryObj<typeof NoteAddOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
