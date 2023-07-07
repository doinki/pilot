import type { Meta, StoryObj } from '@storybook/react';

import BackupOutlined from '../../lib/action/BackupOutlined';

const meta: Meta<typeof BackupOutlined> = {
  component: BackupOutlined,
  tags: ['autodocs'],
  title: 'action/BackupOutlined',
};

export default meta;
type Story = StoryObj<typeof BackupOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
