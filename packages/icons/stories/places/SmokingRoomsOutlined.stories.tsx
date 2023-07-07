import type { Meta, StoryObj } from '@storybook/react';

import SmokingRoomsOutlined from '../../lib/places/SmokingRoomsOutlined';

const meta: Meta<typeof SmokingRoomsOutlined> = {
  component: SmokingRoomsOutlined,
  tags: ['autodocs'],
  title: 'places/SmokingRoomsOutlined',
};

export default meta;
type Story = StoryObj<typeof SmokingRoomsOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
