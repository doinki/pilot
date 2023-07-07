import type { Meta, StoryObj } from '@storybook/react';

import BackupTableOutlined from '../../lib/action/BackupTableOutlined';

const meta: Meta<typeof BackupTableOutlined> = {
  component: BackupTableOutlined,
  tags: ['autodocs'],
  title: 'action/BackupTableOutlined',
};

export default meta;
type Story = StoryObj<typeof BackupTableOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
