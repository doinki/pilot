import type { Meta, StoryObj } from '@storybook/react';

import WindowOutlined from '../../lib/search/WindowOutlined';

const meta: Meta<typeof WindowOutlined> = {
  component: WindowOutlined,
  tags: ['autodocs'],
  title: 'search/WindowOutlined',
};

export default meta;
type Story = StoryObj<typeof WindowOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
