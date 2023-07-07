import type { Meta, StoryObj } from '@storybook/react';

import FlatwareOutlined from '../../lib/search/FlatwareOutlined';

const meta: Meta<typeof FlatwareOutlined> = {
  component: FlatwareOutlined,
  tags: ['autodocs'],
  title: 'search/FlatwareOutlined',
};

export default meta;
type Story = StoryObj<typeof FlatwareOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
