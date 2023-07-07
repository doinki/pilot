import type { Meta, StoryObj } from '@storybook/react';

import PermCameraMicOutlined from '../../lib/action/PermCameraMicOutlined';

const meta: Meta<typeof PermCameraMicOutlined> = {
  component: PermCameraMicOutlined,
  tags: ['autodocs'],
  title: 'action/PermCameraMicOutlined',
};

export default meta;
type Story = StoryObj<typeof PermCameraMicOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
