import type { Meta, StoryObj } from '@storybook/react';

import DriveFileMoveRtlOutlined from '../../lib/file/DriveFileMoveRtlOutlined';

const meta: Meta<typeof DriveFileMoveRtlOutlined> = {
  component: DriveFileMoveRtlOutlined,
  tags: ['autodocs'],
  title: 'file/DriveFileMoveRtlOutlined',
};

export default meta;
type Story = StoryObj<typeof DriveFileMoveRtlOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
