import type { Meta, StoryObj } from '@storybook/react';

import GroupOffOutlined from '../../lib/social/GroupOffOutlined';

const meta: Meta<typeof GroupOffOutlined> = {
  component: GroupOffOutlined,
  tags: ['autodocs'],
  title: 'social/GroupOffOutlined',
};

export default meta;
type Story = StoryObj<typeof GroupOffOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
