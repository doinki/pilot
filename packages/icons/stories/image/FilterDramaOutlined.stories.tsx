import type { Meta, StoryObj } from '@storybook/react';

import FilterDramaOutlined from '../../lib/image/FilterDramaOutlined';

const meta: Meta<typeof FilterDramaOutlined> = {
  component: FilterDramaOutlined,
  tags: ['autodocs'],
  title: 'image/FilterDramaOutlined',
};

export default meta;
type Story = StoryObj<typeof FilterDramaOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
