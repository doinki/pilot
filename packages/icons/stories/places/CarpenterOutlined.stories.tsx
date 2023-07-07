import type { Meta, StoryObj } from '@storybook/react';

import CarpenterOutlined from '../../lib/places/CarpenterOutlined';

const meta: Meta<typeof CarpenterOutlined> = {
  component: CarpenterOutlined,
  tags: ['autodocs'],
  title: 'places/CarpenterOutlined',
};

export default meta;
type Story = StoryObj<typeof CarpenterOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
