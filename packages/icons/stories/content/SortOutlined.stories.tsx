import type { Meta, StoryObj } from '@storybook/react';

import SortOutlined from '../../lib/content/SortOutlined';

const meta: Meta<typeof SortOutlined> = {
  component: SortOutlined,
  tags: ['autodocs'],
  title: 'content/SortOutlined',
};

export default meta;
type Story = StoryObj<typeof SortOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
