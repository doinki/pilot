import type { Meta, StoryObj } from '@storybook/react';

import BorderBottomOutlined from '../../lib/editor/BorderBottomOutlined';

const meta: Meta<typeof BorderBottomOutlined> = {
  component: BorderBottomOutlined,
  tags: ['autodocs'],
  title: 'editor/BorderBottomOutlined',
};

export default meta;
type Story = StoryObj<typeof BorderBottomOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
