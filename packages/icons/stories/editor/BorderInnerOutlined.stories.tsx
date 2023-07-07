import type { Meta, StoryObj } from '@storybook/react';

import BorderInnerOutlined from '../../lib/editor/BorderInnerOutlined';

const meta: Meta<typeof BorderInnerOutlined> = {
  component: BorderInnerOutlined,
  tags: ['autodocs'],
  title: 'editor/BorderInnerOutlined',
};

export default meta;
type Story = StoryObj<typeof BorderInnerOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
