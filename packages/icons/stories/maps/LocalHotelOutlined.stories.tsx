import type { Meta, StoryObj } from '@storybook/react';

import LocalHotelOutlined from '../../lib/maps/LocalHotelOutlined';

const meta: Meta<typeof LocalHotelOutlined> = {
  component: LocalHotelOutlined,
  tags: ['autodocs'],
  title: 'maps/LocalHotelOutlined',
};

export default meta;
type Story = StoryObj<typeof LocalHotelOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
