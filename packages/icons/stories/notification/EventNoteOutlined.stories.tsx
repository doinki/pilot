import type { Meta, StoryObj } from '@storybook/react';

import EventNoteOutlined from '../../lib/notification/EventNoteOutlined';

const meta: Meta<typeof EventNoteOutlined> = {
  component: EventNoteOutlined,
  tags: ['autodocs'],
  title: 'notification/EventNoteOutlined',
};

export default meta;
type Story = StoryObj<typeof EventNoteOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
