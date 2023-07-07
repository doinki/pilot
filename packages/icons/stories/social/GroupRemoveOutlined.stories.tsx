import type { Meta, StoryObj } from '@storybook/react';

import GroupRemoveOutlined from '../../lib/social/GroupRemoveOutlined';

const meta: Meta<typeof GroupRemoveOutlined> = {
  component: GroupRemoveOutlined,
  tags: ['autodocs'],
  title: 'social/GroupRemoveOutlined',
};

export default meta;
type Story = StoryObj<typeof GroupRemoveOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
