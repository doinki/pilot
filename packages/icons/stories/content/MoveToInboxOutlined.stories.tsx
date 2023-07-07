import type { Meta, StoryObj } from '@storybook/react';

import MoveToInboxOutlined from '../../lib/content/MoveToInboxOutlined';

const meta: Meta<typeof MoveToInboxOutlined> = {
  component: MoveToInboxOutlined,
  tags: ['autodocs'],
  title: 'content/MoveToInboxOutlined',
};

export default meta;
type Story = StoryObj<typeof MoveToInboxOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
