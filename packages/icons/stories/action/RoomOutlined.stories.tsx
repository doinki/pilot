import type { Meta, StoryObj } from '@storybook/react';

import RoomOutlined from '../../lib/action/RoomOutlined';

const meta: Meta<typeof RoomOutlined> = {
  component: RoomOutlined,
  tags: ['autodocs'],
  title: 'action/RoomOutlined',
};

export default meta;
type Story = StoryObj<typeof RoomOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
