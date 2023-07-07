import type { Meta, StoryObj } from '@storybook/react';

import DriveFileMoveOutlined from '../../lib/file/DriveFileMoveOutlined';

const meta: Meta<typeof DriveFileMoveOutlined> = {
  component: DriveFileMoveOutlined,
  tags: ['autodocs'],
  title: 'file/DriveFileMoveOutlined',
};

export default meta;
type Story = StoryObj<typeof DriveFileMoveOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
