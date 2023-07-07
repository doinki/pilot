import type { Meta, StoryObj } from '@storybook/react';

import SetMealOutlined from '../../lib/maps/SetMealOutlined';

const meta: Meta<typeof SetMealOutlined> = {
  component: SetMealOutlined,
  tags: ['autodocs'],
  title: 'maps/SetMealOutlined',
};

export default meta;
type Story = StoryObj<typeof SetMealOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
