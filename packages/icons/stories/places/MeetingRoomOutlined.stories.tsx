import type { Meta, StoryObj } from '@storybook/react';

import MeetingRoomOutlined from '../../lib/places/MeetingRoomOutlined';

const meta: Meta<typeof MeetingRoomOutlined> = {
  component: MeetingRoomOutlined,
  tags: ['autodocs'],
  title: 'places/MeetingRoomOutlined',
};

export default meta;
type Story = StoryObj<typeof MeetingRoomOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
