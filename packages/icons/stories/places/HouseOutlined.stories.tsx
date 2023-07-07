import type { Meta, StoryObj } from '@storybook/react';

import HouseOutlined from '../../lib/places/HouseOutlined';

const meta: Meta<typeof HouseOutlined> = {
  component: HouseOutlined,
  tags: ['autodocs'],
  title: 'places/HouseOutlined',
};

export default meta;
type Story = StoryObj<typeof HouseOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
