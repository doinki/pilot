import type { Meta, StoryObj } from '@storybook/react';

import LinkOutlined from '../../lib/content/LinkOutlined';

const meta: Meta<typeof LinkOutlined> = {
  component: LinkOutlined,
  tags: ['autodocs'],
  title: 'content/LinkOutlined',
};

export default meta;
type Story = StoryObj<typeof LinkOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
