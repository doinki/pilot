import type { Meta, StoryObj } from '@storybook/react';

import LocalAirportOutlined from '../../lib/maps/LocalAirportOutlined';

const meta: Meta<typeof LocalAirportOutlined> = {
  component: LocalAirportOutlined,
  tags: ['autodocs'],
  title: 'maps/LocalAirportOutlined',
};

export default meta;
type Story = StoryObj<typeof LocalAirportOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
