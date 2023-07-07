import type { Meta, StoryObj } from '@storybook/react';

import AirlineSeatFlatAngledOutlined from '../../lib/notification/AirlineSeatFlatAngledOutlined';

const meta: Meta<typeof AirlineSeatFlatAngledOutlined> = {
  component: AirlineSeatFlatAngledOutlined,
  tags: ['autodocs'],
  title: 'notification/AirlineSeatFlatAngledOutlined',
};

export default meta;
type Story = StoryObj<typeof AirlineSeatFlatAngledOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
