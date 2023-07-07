import type { Meta, StoryObj } from '@storybook/react';

import ArrowDropDownOutlined from '../../lib/navigation/ArrowDropDownOutlined';

const meta: Meta<typeof ArrowDropDownOutlined> = {
  component: ArrowDropDownOutlined,
  tags: ['autodocs'],
  title: 'navigation/ArrowDropDownOutlined',
};

export default meta;
type Story = StoryObj<typeof ArrowDropDownOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
