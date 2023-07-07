import type { Meta, StoryObj } from '@storybook/react';

import HouseboatOutlined from '../../lib/places/HouseboatOutlined';

const meta: Meta<typeof HouseboatOutlined> = {
  component: HouseboatOutlined,
  tags: ['autodocs'],
  title: 'places/HouseboatOutlined',
};

export default meta;
type Story = StoryObj<typeof HouseboatOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
