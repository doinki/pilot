import type { Meta, StoryObj } from '@storybook/react';

import ContentCutOutlined from '../../lib/content/ContentCutOutlined';

const meta: Meta<typeof ContentCutOutlined> = {
  component: ContentCutOutlined,
  tags: ['autodocs'],
  title: 'content/ContentCutOutlined',
};

export default meta;
type Story = StoryObj<typeof ContentCutOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
