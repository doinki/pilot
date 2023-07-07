import type { Meta, StoryObj } from '@storybook/react';

import AirlineSeatFlatOutlined from '../../lib/notification/AirlineSeatFlatOutlined';

const meta: Meta<typeof AirlineSeatFlatOutlined> = {
  component: AirlineSeatFlatOutlined,
  tags: ['autodocs'],
  title: 'notification/AirlineSeatFlatOutlined',
};

export default meta;
type Story = StoryObj<typeof AirlineSeatFlatOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
