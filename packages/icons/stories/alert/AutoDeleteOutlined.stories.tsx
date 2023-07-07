import type { Meta, StoryObj } from '@storybook/react';

import AutoDeleteOutlined from '../../lib/alert/AutoDeleteOutlined';

const meta: Meta<typeof AutoDeleteOutlined> = {
  component: AutoDeleteOutlined,
  tags: ['autodocs'],
  title: 'alert/AutoDeleteOutlined',
};

export default meta;
type Story = StoryObj<typeof AutoDeleteOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
