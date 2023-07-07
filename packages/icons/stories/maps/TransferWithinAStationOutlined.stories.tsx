import type { Meta, StoryObj } from '@storybook/react';

import TransferWithinAStationOutlined from '../../lib/maps/TransferWithinAStationOutlined';

const meta: Meta<typeof TransferWithinAStationOutlined> = {
  component: TransferWithinAStationOutlined,
  tags: ['autodocs'],
  title: 'maps/TransferWithinAStationOutlined',
};

export default meta;
type Story = StoryObj<typeof TransferWithinAStationOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
