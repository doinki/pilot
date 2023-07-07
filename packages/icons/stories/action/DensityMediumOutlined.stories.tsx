import type { Meta, StoryObj } from '@storybook/react';

import DensityMediumOutlined from '../../lib/action/DensityMediumOutlined';

const meta: Meta<typeof DensityMediumOutlined> = {
  component: DensityMediumOutlined,
  tags: ['autodocs'],
  title: 'action/DensityMediumOutlined',
};

export default meta;
type Story = StoryObj<typeof DensityMediumOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
