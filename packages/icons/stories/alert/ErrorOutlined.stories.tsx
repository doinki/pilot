import type { Meta, StoryObj } from '@storybook/react';

import ErrorOutlined from '../../lib/alert/ErrorOutlined';

const meta: Meta<typeof ErrorOutlined> = {
  component: ErrorOutlined,
  tags: ['autodocs'],
  title: 'alert/ErrorOutlined',
};

export default meta;
type Story = StoryObj<typeof ErrorOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
