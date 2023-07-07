import type { Meta, StoryObj } from '@storybook/react';

import ArticleOutlined from '../../lib/action/ArticleOutlined';

const meta: Meta<typeof ArticleOutlined> = {
  component: ArticleOutlined,
  tags: ['autodocs'],
  title: 'action/ArticleOutlined',
};

export default meta;
type Story = StoryObj<typeof ArticleOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
