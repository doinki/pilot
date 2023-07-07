import type { Meta, StoryObj } from '@storybook/react';

import MovingOutlined from '../../lib/maps/MovingOutlined';

const meta: Meta<typeof MovingOutlined> = {
  component: MovingOutlined,
  tags: ['autodocs'],
  title: 'maps/MovingOutlined',
};

export default meta;
type Story = StoryObj<typeof MovingOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
