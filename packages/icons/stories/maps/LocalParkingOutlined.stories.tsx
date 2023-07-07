import type { Meta, StoryObj } from '@storybook/react';

import LocalParkingOutlined from '../../lib/maps/LocalParkingOutlined';

const meta: Meta<typeof LocalParkingOutlined> = {
  component: LocalParkingOutlined,
  tags: ['autodocs'],
  title: 'maps/LocalParkingOutlined',
};

export default meta;
type Story = StoryObj<typeof LocalParkingOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
