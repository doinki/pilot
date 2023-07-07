import type { Meta, StoryObj } from '@storybook/react';

import JoinLeftOutlined from '../../lib/action/JoinLeftOutlined';

const meta: Meta<typeof JoinLeftOutlined> = {
  component: JoinLeftOutlined,
  tags: ['autodocs'],
  title: 'action/JoinLeftOutlined',
};

export default meta;
type Story = StoryObj<typeof JoinLeftOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
