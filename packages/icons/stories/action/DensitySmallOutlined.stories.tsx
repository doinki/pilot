import type { Meta, StoryObj } from '@storybook/react';

import DensitySmallOutlined from '../../lib/action/DensitySmallOutlined';

const meta: Meta<typeof DensitySmallOutlined> = {
  component: DensitySmallOutlined,
  tags: ['autodocs'],
  title: 'action/DensitySmallOutlined',
};

export default meta;
type Story = StoryObj<typeof DensitySmallOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
