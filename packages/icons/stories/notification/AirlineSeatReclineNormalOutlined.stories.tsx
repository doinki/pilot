import type { Meta, StoryObj } from '@storybook/react';

import AirlineSeatReclineNormalOutlined from '../../lib/notification/AirlineSeatReclineNormalOutlined';

const meta: Meta<typeof AirlineSeatReclineNormalOutlined> = {
  component: AirlineSeatReclineNormalOutlined,
  tags: ['autodocs'],
  title: 'notification/AirlineSeatReclineNormalOutlined',
};

export default meta;
type Story = StoryObj<typeof AirlineSeatReclineNormalOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
