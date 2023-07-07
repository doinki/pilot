import type { Meta, StoryObj } from '@storybook/react';

import AirlineSeatLegroomExtraOutlined from '../../lib/notification/AirlineSeatLegroomExtraOutlined';

const meta: Meta<typeof AirlineSeatLegroomExtraOutlined> = {
  component: AirlineSeatLegroomExtraOutlined,
  tags: ['autodocs'],
  title: 'notification/AirlineSeatLegroomExtraOutlined',
};

export default meta;
type Story = StoryObj<typeof AirlineSeatLegroomExtraOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
