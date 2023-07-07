import type { Meta, StoryObj } from '@storybook/react';

import WheelchairPickupOutlined from '../../lib/places/WheelchairPickupOutlined';

const meta: Meta<typeof WheelchairPickupOutlined> = {
  component: WheelchairPickupOutlined,
  tags: ['autodocs'],
  title: 'places/WheelchairPickupOutlined',
};

export default meta;
type Story = StoryObj<typeof WheelchairPickupOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
