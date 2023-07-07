import type { Meta, StoryObj } from '@storybook/react';

import ContentPasteSearchOutlined from '../../lib/content/ContentPasteSearchOutlined';

const meta: Meta<typeof ContentPasteSearchOutlined> = {
  component: ContentPasteSearchOutlined,
  tags: ['autodocs'],
  title: 'content/ContentPasteSearchOutlined',
};

export default meta;
type Story = StoryObj<typeof ContentPasteSearchOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
