import type { Meta, StoryObj } from '@storybook/react';

import ElectricalServicesOutlined from '../../lib/maps/ElectricalServicesOutlined';

const meta: Meta<typeof ElectricalServicesOutlined> = {
  component: ElectricalServicesOutlined,
  tags: ['autodocs'],
  title: 'maps/ElectricalServicesOutlined',
};

export default meta;
type Story = StoryObj<typeof ElectricalServicesOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
