import type { Meta, StoryObj } from '@storybook/react';

import ElevatorOutlined from '../../lib/places/ElevatorOutlined';

const meta: Meta<typeof ElevatorOutlined> = {
  component: ElevatorOutlined,
  tags: ['autodocs'],
  title: 'places/ElevatorOutlined',
};

export default meta;
type Story = StoryObj<typeof ElevatorOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
