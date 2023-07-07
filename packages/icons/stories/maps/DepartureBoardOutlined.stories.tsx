import type { Meta, StoryObj } from '@storybook/react';

import DepartureBoardOutlined from '../../lib/maps/DepartureBoardOutlined';

const meta: Meta<typeof DepartureBoardOutlined> = {
  component: DepartureBoardOutlined,
  tags: ['autodocs'],
  title: 'maps/DepartureBoardOutlined',
};

export default meta;
type Story = StoryObj<typeof DepartureBoardOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
