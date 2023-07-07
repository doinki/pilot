import type { Meta, StoryObj } from '@storybook/react';

import JoinRightOutlined from '../../lib/action/JoinRightOutlined';

const meta: Meta<typeof JoinRightOutlined> = {
  component: JoinRightOutlined,
  tags: ['autodocs'],
  title: 'action/JoinRightOutlined',
};

export default meta;
type Story = StoryObj<typeof JoinRightOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
