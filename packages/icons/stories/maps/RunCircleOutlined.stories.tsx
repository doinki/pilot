import type { Meta, StoryObj } from '@storybook/react';

import RunCircleOutlined from '../../lib/maps/RunCircleOutlined';

const meta: Meta<typeof RunCircleOutlined> = {
  component: RunCircleOutlined,
  tags: ['autodocs'],
  title: 'maps/RunCircleOutlined',
};

export default meta;
type Story = StoryObj<typeof RunCircleOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
