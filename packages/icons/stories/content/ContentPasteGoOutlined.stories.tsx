import type { Meta, StoryObj } from '@storybook/react';

import ContentPasteGoOutlined from '../../lib/content/ContentPasteGoOutlined';

const meta: Meta<typeof ContentPasteGoOutlined> = {
  component: ContentPasteGoOutlined,
  tags: ['autodocs'],
  title: 'content/ContentPasteGoOutlined',
};

export default meta;
type Story = StoryObj<typeof ContentPasteGoOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
