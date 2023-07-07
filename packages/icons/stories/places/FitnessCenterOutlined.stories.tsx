import type { Meta, StoryObj } from '@storybook/react';

import FitnessCenterOutlined from '../../lib/places/FitnessCenterOutlined';

const meta: Meta<typeof FitnessCenterOutlined> = {
  component: FitnessCenterOutlined,
  tags: ['autodocs'],
  title: 'places/FitnessCenterOutlined',
};

export default meta;
type Story = StoryObj<typeof FitnessCenterOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
