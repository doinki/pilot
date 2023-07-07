import type { Meta, StoryObj } from '@storybook/react';

import CoffeeOutlined from '../../lib/search/CoffeeOutlined';

const meta: Meta<typeof CoffeeOutlined> = {
  component: CoffeeOutlined,
  tags: ['autodocs'],
  title: 'search/CoffeeOutlined',
};

export default meta;
type Story = StoryObj<typeof CoffeeOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
