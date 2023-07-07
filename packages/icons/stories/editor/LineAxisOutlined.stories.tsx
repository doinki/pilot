import type { Meta, StoryObj } from '@storybook/react';

import LineAxisOutlined from '../../lib/editor/LineAxisOutlined';

const meta: Meta<typeof LineAxisOutlined> = {
  component: LineAxisOutlined,
  tags: ['autodocs'],
  title: 'editor/LineAxisOutlined',
};

export default meta;
type Story = StoryObj<typeof LineAxisOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
