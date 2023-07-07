import type { Meta, StoryObj } from '@storybook/react';

import CheckBoxOutlineBlankOutlined from '../../lib/toggle/CheckBoxOutlineBlankOutlined';

const meta: Meta<typeof CheckBoxOutlineBlankOutlined> = {
  component: CheckBoxOutlineBlankOutlined,
  tags: ['autodocs'],
  title: 'toggle/CheckBoxOutlineBlankOutlined',
};

export default meta;
type Story = StoryObj<typeof CheckBoxOutlineBlankOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
