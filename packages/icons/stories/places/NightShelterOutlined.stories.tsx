import type { Meta, StoryObj } from '@storybook/react';

import NightShelterOutlined from '../../lib/places/NightShelterOutlined';

const meta: Meta<typeof NightShelterOutlined> = {
  component: NightShelterOutlined,
  tags: ['autodocs'],
  title: 'places/NightShelterOutlined',
};

export default meta;
type Story = StoryObj<typeof NightShelterOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
