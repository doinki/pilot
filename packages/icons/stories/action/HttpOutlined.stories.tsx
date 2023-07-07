import type { Meta, StoryObj } from '@storybook/react';

import HttpOutlined from '../../lib/action/HttpOutlined';

const meta: Meta<typeof HttpOutlined> = {
  component: HttpOutlined,
  tags: ['autodocs'],
  title: 'action/HttpOutlined',
};

export default meta;
type Story = StoryObj<typeof HttpOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
