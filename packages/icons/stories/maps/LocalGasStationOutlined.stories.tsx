import type { Meta, StoryObj } from '@storybook/react';

import LocalGasStationOutlined from '../../lib/maps/LocalGasStationOutlined';

const meta: Meta<typeof LocalGasStationOutlined> = {
  component: LocalGasStationOutlined,
  tags: ['autodocs'],
  title: 'maps/LocalGasStationOutlined',
};

export default meta;
type Story = StoryObj<typeof LocalGasStationOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
