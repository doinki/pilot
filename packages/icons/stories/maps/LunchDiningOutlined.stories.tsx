import type { Meta, StoryObj } from '@storybook/react';

import LunchDiningOutlined from '../../lib/maps/LunchDiningOutlined';

const meta: Meta<typeof LunchDiningOutlined> = {
  component: LunchDiningOutlined,
  tags: ['autodocs'],
  title: 'maps/LunchDiningOutlined',
};

export default meta;
type Story = StoryObj<typeof LunchDiningOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
