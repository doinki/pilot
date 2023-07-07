import type { Meta, StoryObj } from '@storybook/react';

import FaceUnlockOutlined from '../../lib/action/FaceUnlockOutlined';

const meta: Meta<typeof FaceUnlockOutlined> = {
  component: FaceUnlockOutlined,
  tags: ['autodocs'],
  title: 'action/FaceUnlockOutlined',
};

export default meta;
type Story = StoryObj<typeof FaceUnlockOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
