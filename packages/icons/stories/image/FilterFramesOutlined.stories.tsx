import type { Meta, StoryObj } from '@storybook/react';

import FilterFramesOutlined from '../../lib/image/FilterFramesOutlined';

const meta: Meta<typeof FilterFramesOutlined> = {
  component: FilterFramesOutlined,
  tags: ['autodocs'],
  title: 'image/FilterFramesOutlined',
};

export default meta;
type Story = StoryObj<typeof FilterFramesOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
