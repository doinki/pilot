import type { Meta, StoryObj } from '@storybook/react';

import DataObjectOutlined from '../../lib/editor/DataObjectOutlined';

const meta: Meta<typeof DataObjectOutlined> = {
  component: DataObjectOutlined,
  tags: ['autodocs'],
  title: 'editor/DataObjectOutlined',
};

export default meta;
type Story = StoryObj<typeof DataObjectOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
