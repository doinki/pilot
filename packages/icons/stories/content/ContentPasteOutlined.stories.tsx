import type { Meta, StoryObj } from '@storybook/react';

import ContentPasteOutlined from '../../lib/content/ContentPasteOutlined';

const meta: Meta<typeof ContentPasteOutlined> = {
  component: ContentPasteOutlined,
  tags: ['autodocs'],
  title: 'content/ContentPasteOutlined',
};

export default meta;
type Story = StoryObj<typeof ContentPasteOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
