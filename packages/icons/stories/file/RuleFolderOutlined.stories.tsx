import type { Meta, StoryObj } from '@storybook/react';

import RuleFolderOutlined from '../../lib/file/RuleFolderOutlined';

const meta: Meta<typeof RuleFolderOutlined> = {
  component: RuleFolderOutlined,
  tags: ['autodocs'],
  title: 'file/RuleFolderOutlined',
};

export default meta;
type Story = StoryObj<typeof RuleFolderOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
