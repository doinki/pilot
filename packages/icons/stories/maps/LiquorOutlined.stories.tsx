import type { Meta, StoryObj } from '@storybook/react';

import LiquorOutlined from '../../lib/maps/LiquorOutlined';

const meta: Meta<typeof LiquorOutlined> = {
  component: LiquorOutlined,
  tags: ['autodocs'],
  title: 'maps/LiquorOutlined',
};

export default meta;
type Story = StoryObj<typeof LiquorOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
