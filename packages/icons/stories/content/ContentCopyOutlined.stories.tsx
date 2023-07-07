import type { Meta, StoryObj } from '@storybook/react';

import ContentCopyOutlined from '../../lib/content/ContentCopyOutlined';

const meta: Meta<typeof ContentCopyOutlined> = {
  component: ContentCopyOutlined,
  tags: ['autodocs'],
  title: 'content/ContentCopyOutlined',
};

export default meta;
type Story = StoryObj<typeof ContentCopyOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
