import type { Meta, StoryObj } from '@storybook/react';

import FilterBAndWOutlined from '../../lib/image/FilterBAndWOutlined';

const meta: Meta<typeof FilterBAndWOutlined> = {
  component: FilterBAndWOutlined,
  tags: ['autodocs'],
  title: 'image/FilterBAndWOutlined',
};

export default meta;
type Story = StoryObj<typeof FilterBAndWOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
