import type { Meta, StoryObj } from '@storybook/react';

import AirlineSeatLegroomNormalOutlined from '../../lib/notification/AirlineSeatLegroomNormalOutlined';

const meta: Meta<typeof AirlineSeatLegroomNormalOutlined> = {
  component: AirlineSeatLegroomNormalOutlined,
  tags: ['autodocs'],
  title: 'notification/AirlineSeatLegroomNormalOutlined',
};

export default meta;
type Story = StoryObj<typeof AirlineSeatLegroomNormalOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
