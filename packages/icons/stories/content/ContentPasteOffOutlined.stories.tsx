import type { Meta, StoryObj } from '@storybook/react';

import ContentPasteOffOutlined from '../../lib/content/ContentPasteOffOutlined';

const meta: Meta<typeof ContentPasteOffOutlined> = {
  component: ContentPasteOffOutlined,
  tags: ['autodocs'],
  title: 'content/ContentPasteOffOutlined',
};

export default meta;
type Story = StoryObj<typeof ContentPasteOffOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
