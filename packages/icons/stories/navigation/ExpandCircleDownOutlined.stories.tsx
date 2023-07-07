import type { Meta, StoryObj } from '@storybook/react';

import ExpandCircleDownOutlined from '../../lib/navigation/ExpandCircleDownOutlined';

const meta: Meta<typeof ExpandCircleDownOutlined> = {
  component: ExpandCircleDownOutlined,
  tags: ['autodocs'],
  title: 'navigation/ExpandCircleDownOutlined',
};

export default meta;
type Story = StoryObj<typeof ExpandCircleDownOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
