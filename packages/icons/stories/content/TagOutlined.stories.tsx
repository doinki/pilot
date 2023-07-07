import type { Meta, StoryObj } from '@storybook/react';

import TagOutlined from '../../lib/content/TagOutlined';

const meta: Meta<typeof TagOutlined> = {
  component: TagOutlined,
  tags: ['autodocs'],
  title: 'content/TagOutlined',
};

export default meta;
type Story = StoryObj<typeof TagOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
