import type { Meta, StoryObj } from '@storybook/react';

import ChairOutlined from '../../lib/search/ChairOutlined';

const meta: Meta<typeof ChairOutlined> = {
  component: ChairOutlined,
  tags: ['autodocs'],
  title: 'search/ChairOutlined',
};

export default meta;
type Story = StoryObj<typeof ChairOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
