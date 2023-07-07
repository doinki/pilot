import type { Meta, StoryObj } from '@storybook/react';

import HouseSidingOutlined from '../../lib/places/HouseSidingOutlined';

const meta: Meta<typeof HouseSidingOutlined> = {
  component: HouseSidingOutlined,
  tags: ['autodocs'],
  title: 'places/HouseSidingOutlined',
};

export default meta;
type Story = StoryObj<typeof HouseSidingOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
