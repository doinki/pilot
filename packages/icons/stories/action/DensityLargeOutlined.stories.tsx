import type { Meta, StoryObj } from '@storybook/react';

import DensityLargeOutlined from '../../lib/action/DensityLargeOutlined';

const meta: Meta<typeof DensityLargeOutlined> = {
  component: DensityLargeOutlined,
  tags: ['autodocs'],
  title: 'action/DensityLargeOutlined',
};

export default meta;
type Story = StoryObj<typeof DensityLargeOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
