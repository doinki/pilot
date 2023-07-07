import type { Meta, StoryObj } from '@storybook/react';

import InsertLinkOutlined from '../../lib/editor/InsertLinkOutlined';

const meta: Meta<typeof InsertLinkOutlined> = {
  component: InsertLinkOutlined,
  tags: ['autodocs'],
  title: 'editor/InsertLinkOutlined',
};

export default meta;
type Story = StoryObj<typeof InsertLinkOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
