import type { Meta, StoryObj } from '@storybook/react';

import IndeterminateCheckBoxOutlined from '../../lib/toggle/IndeterminateCheckBoxOutlined';

const meta: Meta<typeof IndeterminateCheckBoxOutlined> = {
  component: IndeterminateCheckBoxOutlined,
  tags: ['autodocs'],
  title: 'toggle/IndeterminateCheckBoxOutlined',
};

export default meta;
type Story = StoryObj<typeof IndeterminateCheckBoxOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
