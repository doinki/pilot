import type { Meta, StoryObj } from '@storybook/react';

import FolderSpecialOutlined from '../../lib/notification/FolderSpecialOutlined';

const meta: Meta<typeof FolderSpecialOutlined> = {
  component: FolderSpecialOutlined,
  tags: ['autodocs'],
  title: 'notification/FolderSpecialOutlined',
};

export default meta;
type Story = StoryObj<typeof FolderSpecialOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
