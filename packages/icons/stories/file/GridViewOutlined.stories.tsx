import type { Meta, StoryObj } from '@storybook/react';

import GridViewOutlined from '../../lib/file/GridViewOutlined';

const meta: Meta<typeof GridViewOutlined> = {
  component: GridViewOutlined,
  tags: ['autodocs'],
  title: 'file/GridViewOutlined',
};

export default meta;
type Story = StoryObj<typeof GridViewOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
