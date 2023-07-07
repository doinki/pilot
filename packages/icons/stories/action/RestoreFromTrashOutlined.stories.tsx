import type { Meta, StoryObj } from '@storybook/react';

import RestoreFromTrashOutlined from '../../lib/action/RestoreFromTrashOutlined';

const meta: Meta<typeof RestoreFromTrashOutlined> = {
  component: RestoreFromTrashOutlined,
  tags: ['autodocs'],
  title: 'action/RestoreFromTrashOutlined',
};

export default meta;
type Story = StoryObj<typeof RestoreFromTrashOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
