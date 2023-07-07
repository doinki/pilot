import type { Meta, StoryObj } from '@storybook/react';

import PlayForWorkOutlined from '../../lib/action/PlayForWorkOutlined';

const meta: Meta<typeof PlayForWorkOutlined> = {
  component: PlayForWorkOutlined,
  tags: ['autodocs'],
  title: 'action/PlayForWorkOutlined',
};

export default meta;
type Story = StoryObj<typeof PlayForWorkOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
