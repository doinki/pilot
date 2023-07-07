import type { Meta, StoryObj } from '@storybook/react';

import AirlineSeatLegroomReducedOutlined from '../../lib/notification/AirlineSeatLegroomReducedOutlined';

const meta: Meta<typeof AirlineSeatLegroomReducedOutlined> = {
  component: AirlineSeatLegroomReducedOutlined,
  tags: ['autodocs'],
  title: 'notification/AirlineSeatLegroomReducedOutlined',
};

export default meta;
type Story = StoryObj<typeof AirlineSeatLegroomReducedOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
