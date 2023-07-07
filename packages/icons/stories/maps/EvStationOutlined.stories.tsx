import type { Meta, StoryObj } from '@storybook/react';

import EvStationOutlined from '../../lib/maps/EvStationOutlined';

const meta: Meta<typeof EvStationOutlined> = {
  component: EvStationOutlined,
  tags: ['autodocs'],
  title: 'maps/EvStationOutlined',
};

export default meta;
type Story = StoryObj<typeof EvStationOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
