import type { Meta, StoryObj } from '@storybook/react';

import DiningOutlined from '../../lib/search/DiningOutlined';

const meta: Meta<typeof DiningOutlined> = {
  component: DiningOutlined,
  tags: ['autodocs'],
  title: 'search/DiningOutlined',
};

export default meta;
type Story = StoryObj<typeof DiningOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
