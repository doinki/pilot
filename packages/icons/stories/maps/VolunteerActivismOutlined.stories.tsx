import type { Meta, StoryObj } from '@storybook/react';

import VolunteerActivismOutlined from '../../lib/maps/VolunteerActivismOutlined';

const meta: Meta<typeof VolunteerActivismOutlined> = {
  component: VolunteerActivismOutlined,
  tags: ['autodocs'],
  title: 'maps/VolunteerActivismOutlined',
};

export default meta;
type Story = StoryObj<typeof VolunteerActivismOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
