import type { Meta, StoryObj } from '@storybook/react';

import JoinFullOutlined from '../../lib/action/JoinFullOutlined';

const meta: Meta<typeof JoinFullOutlined> = {
  component: JoinFullOutlined,
  tags: ['autodocs'],
  title: 'action/JoinFullOutlined',
};

export default meta;
type Story = StoryObj<typeof JoinFullOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
