import type { Meta, StoryObj } from '@storybook/react';

import RoomPreferencesOutlined from '../../lib/places/RoomPreferencesOutlined';

const meta: Meta<typeof RoomPreferencesOutlined> = {
  component: RoomPreferencesOutlined,
  tags: ['autodocs'],
  title: 'places/RoomPreferencesOutlined',
};

export default meta;
type Story = StoryObj<typeof RoomPreferencesOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
