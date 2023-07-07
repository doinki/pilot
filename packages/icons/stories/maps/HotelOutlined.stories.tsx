import type { Meta, StoryObj } from '@storybook/react';

import HotelOutlined from '../../lib/maps/HotelOutlined';

const meta: Meta<typeof HotelOutlined> = {
  component: HotelOutlined,
  tags: ['autodocs'],
  title: 'maps/HotelOutlined',
};

export default meta;
type Story = StoryObj<typeof HotelOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
