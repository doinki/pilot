import type { Meta, StoryObj } from '@storybook/react';

import BuildCircleOutlined from '../../lib/action/BuildCircleOutlined';

const meta: Meta<typeof BuildCircleOutlined> = {
  component: BuildCircleOutlined,
  tags: ['autodocs'],
  title: 'action/BuildCircleOutlined',
};

export default meta;
type Story = StoryObj<typeof BuildCircleOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
