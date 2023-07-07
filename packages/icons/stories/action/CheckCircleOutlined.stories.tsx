import type { Meta, StoryObj } from '@storybook/react';

import CheckCircleOutlined from '../../lib/action/CheckCircleOutlined';

const meta: Meta<typeof CheckCircleOutlined> = {
  component: CheckCircleOutlined,
  tags: ['autodocs'],
  title: 'action/CheckCircleOutlined',
};

export default meta;
type Story = StoryObj<typeof CheckCircleOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
