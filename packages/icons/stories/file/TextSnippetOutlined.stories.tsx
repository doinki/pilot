import type { Meta, StoryObj } from '@storybook/react';

import TextSnippetOutlined from '../../lib/file/TextSnippetOutlined';

const meta: Meta<typeof TextSnippetOutlined> = {
  component: TextSnippetOutlined,
  tags: ['autodocs'],
  title: 'file/TextSnippetOutlined',
};

export default meta;
type Story = StoryObj<typeof TextSnippetOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
