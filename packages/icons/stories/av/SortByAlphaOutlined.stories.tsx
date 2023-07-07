import type { Meta, StoryObj } from '@storybook/react';

import SortByAlphaOutlined from '../../lib/av/SortByAlphaOutlined';

const meta: Meta<typeof SortByAlphaOutlined> = {
  component: SortByAlphaOutlined,
  tags: ['autodocs'],
  title: 'av/SortByAlphaOutlined',
};

export default meta;
type Story = StoryObj<typeof SortByAlphaOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
