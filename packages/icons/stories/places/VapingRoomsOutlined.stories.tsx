import type { Meta, StoryObj } from '@storybook/react';

import VapingRoomsOutlined from '../../lib/places/VapingRoomsOutlined';

const meta: Meta<typeof VapingRoomsOutlined> = {
  component: VapingRoomsOutlined,
  tags: ['autodocs'],
  title: 'places/VapingRoomsOutlined',
};

export default meta;
type Story = StoryObj<typeof VapingRoomsOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
