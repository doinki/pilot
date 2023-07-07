import type { Meta, StoryObj } from '@storybook/react';

import AirplaneTicketOutlined from '../../lib/device/AirplaneTicketOutlined';

const meta: Meta<typeof AirplaneTicketOutlined> = {
  component: AirplaneTicketOutlined,
  tags: ['autodocs'],
  title: 'device/AirplaneTicketOutlined',
};

export default meta;
type Story = StoryObj<typeof AirplaneTicketOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
