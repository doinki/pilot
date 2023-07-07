import type { Meta, StoryObj } from '@storybook/react';

import AppBlockingOutlined from '../../lib/action/AppBlockingOutlined';

const meta: Meta<typeof AppBlockingOutlined> = {
  component: AppBlockingOutlined,
  tags: ['autodocs'],
  title: 'action/AppBlockingOutlined',
};

export default meta;
type Story = StoryObj<typeof AppBlockingOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
