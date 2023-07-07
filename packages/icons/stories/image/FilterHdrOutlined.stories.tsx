import type { Meta, StoryObj } from '@storybook/react';

import FilterHdrOutlined from '../../lib/image/FilterHdrOutlined';

const meta: Meta<typeof FilterHdrOutlined> = {
  component: FilterHdrOutlined,
  tags: ['autodocs'],
  title: 'image/FilterHdrOutlined',
};

export default meta;
type Story = StoryObj<typeof FilterHdrOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
