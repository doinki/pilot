import type { Meta, StoryObj } from '@storybook/react';

import MusicNoteOutlined from '../../lib/image/MusicNoteOutlined';

const meta: Meta<typeof MusicNoteOutlined> = {
  component: MusicNoteOutlined,
  tags: ['autodocs'],
  title: 'image/MusicNoteOutlined',
};

export default meta;
type Story = StoryObj<typeof MusicNoteOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
