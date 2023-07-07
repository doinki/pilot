import type { Meta, StoryObj } from '@storybook/react';

import FilterVintageOutlined from '../../lib/image/FilterVintageOutlined';

const meta: Meta<typeof FilterVintageOutlined> = {
  component: FilterVintageOutlined,
  tags: ['autodocs'],
  title: 'image/FilterVintageOutlined',
};

export default meta;
type Story = StoryObj<typeof FilterVintageOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
