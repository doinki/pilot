import type { Meta, StoryObj } from '@storybook/react';

import PolicyOutlined from '../../lib/content/PolicyOutlined';

const meta: Meta<typeof PolicyOutlined> = {
  component: PolicyOutlined,
  tags: ['autodocs'],
  title: 'content/PolicyOutlined',
};

export default meta;
type Story = StoryObj<typeof PolicyOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
