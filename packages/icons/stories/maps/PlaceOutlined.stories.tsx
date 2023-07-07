import type { Meta, StoryObj } from '@storybook/react';

import PlaceOutlined from '../../lib/maps/PlaceOutlined';

const meta: Meta<typeof PlaceOutlined> = {
  component: PlaceOutlined,
  tags: ['autodocs'],
  title: 'maps/PlaceOutlined',
};

export default meta;
type Story = StoryObj<typeof PlaceOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
