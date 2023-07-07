import type { Meta, StoryObj } from '@storybook/react';

import ChurchOutlined from '../../lib/maps/ChurchOutlined';

const meta: Meta<typeof ChurchOutlined> = {
  component: ChurchOutlined,
  tags: ['autodocs'],
  title: 'maps/ChurchOutlined',
};

export default meta;
type Story = StoryObj<typeof ChurchOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
