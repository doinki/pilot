import type { Meta, StoryObj } from '@storybook/react';

import HolidayVillageOutlined from '../../lib/places/HolidayVillageOutlined';

const meta: Meta<typeof HolidayVillageOutlined> = {
  component: HolidayVillageOutlined,
  tags: ['autodocs'],
  title: 'places/HolidayVillageOutlined',
};

export default meta;
type Story = StoryObj<typeof HolidayVillageOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
