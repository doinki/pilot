import type { Meta, StoryObj } from '@storybook/react';

import NoteAltOutlined from '../../lib/device/NoteAltOutlined';

const meta: Meta<typeof NoteAltOutlined> = {
  component: NoteAltOutlined,
  tags: ['autodocs'],
  title: 'device/NoteAltOutlined',
};

export default meta;
type Story = StoryObj<typeof NoteAltOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
