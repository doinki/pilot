import type { Meta, StoryObj } from '@storybook/react';

import CompostOutlined from '../../lib/social/CompostOutlined';

const meta: Meta<typeof CompostOutlined> = {
  component: CompostOutlined,
  tags: ['autodocs'],
  title: 'social/CompostOutlined',
};

export default meta;
type Story = StoryObj<typeof CompostOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
