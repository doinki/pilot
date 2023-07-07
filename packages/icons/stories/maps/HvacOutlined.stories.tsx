import type { Meta, StoryObj } from '@storybook/react';

import HvacOutlined from '../../lib/maps/HvacOutlined';

const meta: Meta<typeof HvacOutlined> = {
  component: HvacOutlined,
  tags: ['autodocs'],
  title: 'maps/HvacOutlined',
};

export default meta;
type Story = StoryObj<typeof HvacOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
