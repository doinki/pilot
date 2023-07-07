import type { Meta, StoryObj } from '@storybook/react';

import ConnectingAirportsOutlined from '../../lib/maps/ConnectingAirportsOutlined';

const meta: Meta<typeof ConnectingAirportsOutlined> = {
  component: ConnectingAirportsOutlined,
  tags: ['autodocs'],
  title: 'maps/ConnectingAirportsOutlined',
};

export default meta;
type Story = StoryObj<typeof ConnectingAirportsOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
