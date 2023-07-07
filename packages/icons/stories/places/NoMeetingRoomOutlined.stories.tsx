import type { Meta, StoryObj } from '@storybook/react';

import NoMeetingRoomOutlined from '../../lib/places/NoMeetingRoomOutlined';

const meta: Meta<typeof NoMeetingRoomOutlined> = {
  component: NoMeetingRoomOutlined,
  tags: ['autodocs'],
  title: 'places/NoMeetingRoomOutlined',
};

export default meta;
type Story = StoryObj<typeof NoMeetingRoomOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
