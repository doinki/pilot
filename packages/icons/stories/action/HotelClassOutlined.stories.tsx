import type { Meta, StoryObj } from '@storybook/react';

import HotelClassOutlined from '../../lib/action/HotelClassOutlined';

const meta: Meta<typeof HotelClassOutlined> = {
  component: HotelClassOutlined,
  tags: ['autodocs'],
  title: 'action/HotelClassOutlined',
};

export default meta;
type Story = StoryObj<typeof HotelClassOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
