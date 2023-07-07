import type { Meta, StoryObj } from '@storybook/react';

import DataArrayOutlined from '../../lib/editor/DataArrayOutlined';

const meta: Meta<typeof DataArrayOutlined> = {
  component: DataArrayOutlined,
  tags: ['autodocs'],
  title: 'editor/DataArrayOutlined',
};

export default meta;
type Story = StoryObj<typeof DataArrayOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
