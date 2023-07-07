import type { Meta, StoryObj } from '@storybook/react';

import NoteOutlined from '../../lib/av/NoteOutlined';

const meta: Meta<typeof NoteOutlined> = {
  component: NoteOutlined,
  tags: ['autodocs'],
  title: 'av/NoteOutlined',
};

export default meta;
type Story = StoryObj<typeof NoteOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
