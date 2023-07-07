import type { Meta, StoryObj } from '@storybook/react';

import AirportShuttleOutlined from '../../lib/places/AirportShuttleOutlined';

const meta: Meta<typeof AirportShuttleOutlined> = {
  component: AirportShuttleOutlined,
  tags: ['autodocs'],
  title: 'places/AirportShuttleOutlined',
};

export default meta;
type Story = StoryObj<typeof AirportShuttleOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
