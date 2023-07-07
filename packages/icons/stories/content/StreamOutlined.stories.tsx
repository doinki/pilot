import type { Meta, StoryObj } from '@storybook/react';

import StreamOutlined from '../../lib/content/StreamOutlined';

const meta: Meta<typeof StreamOutlined> = {
  component: StreamOutlined,
  tags: ['autodocs'],
  title: 'content/StreamOutlined',
};

export default meta;
type Story = StoryObj<typeof StreamOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
