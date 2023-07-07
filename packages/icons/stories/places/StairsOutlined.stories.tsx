import type { Meta, StoryObj } from '@storybook/react';

import StairsOutlined from '../../lib/places/StairsOutlined';

const meta: Meta<typeof StairsOutlined> = {
  component: StairsOutlined,
  tags: ['autodocs'],
  title: 'places/StairsOutlined',
};

export default meta;
type Story = StoryObj<typeof StairsOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
