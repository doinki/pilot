import type { Meta, StoryObj } from '@storybook/react';

import ModeOfTravelOutlined from '../../lib/maps/ModeOfTravelOutlined';

const meta: Meta<typeof ModeOfTravelOutlined> = {
  component: ModeOfTravelOutlined,
  tags: ['autodocs'],
  title: 'maps/ModeOfTravelOutlined',
};

export default meta;
type Story = StoryObj<typeof ModeOfTravelOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
