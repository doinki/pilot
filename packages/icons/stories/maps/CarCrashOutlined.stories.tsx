import type { Meta, StoryObj } from '@storybook/react';

import CarCrashOutlined from '../../lib/maps/CarCrashOutlined';

const meta: Meta<typeof CarCrashOutlined> = {
  component: CarCrashOutlined,
  tags: ['autodocs'],
  title: 'maps/CarCrashOutlined',
};

export default meta;
type Story = StoryObj<typeof CarCrashOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
