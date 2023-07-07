import type { Meta, StoryObj } from '@storybook/react';

import LocationCityOutlined from '../../lib/social/LocationCityOutlined';

const meta: Meta<typeof LocationCityOutlined> = {
  component: LocationCityOutlined,
  tags: ['autodocs'],
  title: 'social/LocationCityOutlined',
};

export default meta;
type Story = StoryObj<typeof LocationCityOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
