import type { Meta, StoryObj } from '@storybook/react';

import AddLinkOutlined from '../../lib/content/AddLinkOutlined';

const meta: Meta<typeof AddLinkOutlined> = {
  component: AddLinkOutlined,
  tags: ['autodocs'],
  title: 'content/AddLinkOutlined',
};

export default meta;
type Story = StoryObj<typeof AddLinkOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
