import type { Meta, StoryObj } from '@storybook/react';

import BorderVerticalOutlined from '../../lib/editor/BorderVerticalOutlined';

const meta: Meta<typeof BorderVerticalOutlined> = {
  component: BorderVerticalOutlined,
  tags: ['autodocs'],
  title: 'editor/BorderVerticalOutlined',
};

export default meta;
type Story = StoryObj<typeof BorderVerticalOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
