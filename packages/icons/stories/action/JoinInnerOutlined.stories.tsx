import type { Meta, StoryObj } from '@storybook/react';

import JoinInnerOutlined from '../../lib/action/JoinInnerOutlined';

const meta: Meta<typeof JoinInnerOutlined> = {
  component: JoinInnerOutlined,
  tags: ['autodocs'],
  title: 'action/JoinInnerOutlined',
};

export default meta;
type Story = StoryObj<typeof JoinInnerOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
