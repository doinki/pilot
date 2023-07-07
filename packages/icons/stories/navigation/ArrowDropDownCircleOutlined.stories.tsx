import type { Meta, StoryObj } from '@storybook/react';

import ArrowDropDownCircleOutlined from '../../lib/navigation/ArrowDropDownCircleOutlined';

const meta: Meta<typeof ArrowDropDownCircleOutlined> = {
  component: ArrowDropDownCircleOutlined,
  tags: ['autodocs'],
  title: 'navigation/ArrowDropDownCircleOutlined',
};

export default meta;
type Story = StoryObj<typeof ArrowDropDownCircleOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
