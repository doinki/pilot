import type { Meta, StoryObj } from '@storybook/react';

import AirlineSeatReclineExtraOutlined from '../../lib/notification/AirlineSeatReclineExtraOutlined';

const meta: Meta<typeof AirlineSeatReclineExtraOutlined> = {
  component: AirlineSeatReclineExtraOutlined,
  tags: ['autodocs'],
  title: 'notification/AirlineSeatReclineExtraOutlined',
};

export default meta;
type Story = StoryObj<typeof AirlineSeatReclineExtraOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
