import type { Meta, StoryObj } from '@storybook/react';

import InboxOutlined from '../../lib/content/InboxOutlined';

const meta: Meta<typeof InboxOutlined> = {
  component: InboxOutlined,
  tags: ['autodocs'],
  title: 'content/InboxOutlined',
};

export default meta;
type Story = StoryObj<typeof InboxOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
