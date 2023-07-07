import type { Meta, StoryObj } from '@storybook/react';

import ThirtyFpsOutlined from '../../lib/device/ThirtyFpsOutlined';

const meta: Meta<typeof ThirtyFpsOutlined> = {
  component: ThirtyFpsOutlined,
  tags: ['autodocs'],
  title: 'device/ThirtyFpsOutlined',
};

export default meta;
type Story = StoryObj<typeof ThirtyFpsOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
