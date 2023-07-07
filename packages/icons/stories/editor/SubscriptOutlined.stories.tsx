import type { Meta, StoryObj } from '@storybook/react';

import SubscriptOutlined from '../../lib/editor/SubscriptOutlined';

const meta: Meta<typeof SubscriptOutlined> = {
  component: SubscriptOutlined,
  tags: ['autodocs'],
  title: 'editor/SubscriptOutlined',
};

export default meta;
type Story = StoryObj<typeof SubscriptOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
