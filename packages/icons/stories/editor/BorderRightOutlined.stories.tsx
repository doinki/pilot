import type { Meta, StoryObj } from '@storybook/react';

import BorderRightOutlined from '../../lib/editor/BorderRightOutlined';

const meta: Meta<typeof BorderRightOutlined> = {
  component: BorderRightOutlined,
  tags: ['autodocs'],
  title: 'editor/BorderRightOutlined',
};

export default meta;
type Story = StoryObj<typeof BorderRightOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
