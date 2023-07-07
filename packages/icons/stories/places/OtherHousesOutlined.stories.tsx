import type { Meta, StoryObj } from '@storybook/react';

import OtherHousesOutlined from '../../lib/places/OtherHousesOutlined';

const meta: Meta<typeof OtherHousesOutlined> = {
  component: OtherHousesOutlined,
  tags: ['autodocs'],
  title: 'places/OtherHousesOutlined',
};

export default meta;
type Story = StoryObj<typeof OtherHousesOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
