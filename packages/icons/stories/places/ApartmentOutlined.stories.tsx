import type { Meta, StoryObj } from '@storybook/react';

import ApartmentOutlined from '../../lib/places/ApartmentOutlined';

const meta: Meta<typeof ApartmentOutlined> = {
  component: ApartmentOutlined,
  tags: ['autodocs'],
  title: 'places/ApartmentOutlined',
};

export default meta;
type Story = StoryObj<typeof ApartmentOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
