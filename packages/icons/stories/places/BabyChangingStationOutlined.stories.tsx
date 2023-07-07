import type { Meta, StoryObj } from '@storybook/react';

import BabyChangingStationOutlined from '../../lib/places/BabyChangingStationOutlined';

const meta: Meta<typeof BabyChangingStationOutlined> = {
  component: BabyChangingStationOutlined,
  tags: ['autodocs'],
  title: 'places/BabyChangingStationOutlined',
};

export default meta;
type Story = StoryObj<typeof BabyChangingStationOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
