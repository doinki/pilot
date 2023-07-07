import type { Meta, StoryObj } from '@storybook/react';

import SnippetFolderOutlined from '../../lib/file/SnippetFolderOutlined';

const meta: Meta<typeof SnippetFolderOutlined> = {
  component: SnippetFolderOutlined,
  tags: ['autodocs'],
  title: 'file/SnippetFolderOutlined',
};

export default meta;
type Story = StoryObj<typeof SnippetFolderOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
