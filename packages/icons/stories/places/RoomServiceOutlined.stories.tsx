import type { Meta, StoryObj } from '@storybook/react';

import RoomServiceOutlined from '../../lib/places/RoomServiceOutlined';

const meta: Meta<typeof RoomServiceOutlined> = {
  component: RoomServiceOutlined,
  tags: ['autodocs'],
  title: 'places/RoomServiceOutlined',
};

export default meta;
type Story = StoryObj<typeof RoomServiceOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
