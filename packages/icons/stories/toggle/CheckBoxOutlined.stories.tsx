import type { Meta, StoryObj } from '@storybook/react';

import CheckBoxOutlined from '../../lib/toggle/CheckBoxOutlined';

const meta: Meta<typeof CheckBoxOutlined> = {
  component: CheckBoxOutlined,
  tags: ['autodocs'],
  title: 'toggle/CheckBoxOutlined',
};

export default meta;
type Story = StoryObj<typeof CheckBoxOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
